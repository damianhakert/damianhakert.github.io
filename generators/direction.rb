require 'active_support/core_ext/date/calculations'
require 'active_support/core_ext/numeric/time'

require 'faraday_middleware'
require 'faraday_middleware/parse_oj'

class GitLabInstance
  def initialize
    raise 'PRIVATE_TOKEN required to generate direction page' unless ENV['PRIVATE_TOKEN']

    @connection = Faraday.new(url: endpoint, headers: headers) do |config|
      config.request :json
      config.response :oj
      config.adapter Faraday.default_adapter
    end
  end

  def get(path, params = {})
    response = @connection.get(path, params)

    if response.status != 200
      $stderr.puts "Error in retrieving URL #{response.env.url}: #{response.status}"
    end

    response.body
  end

  private

  def endpoint
    'https://gitlab.com/api/v3'
  end

  def headers
    {
      'PRIVATE-TOKEN' => ENV['PRIVATE_TOKEN']
    }
  end
end

class GitLabProject
   def initialize(id, instance)
     @id = id
     @instance = instance
   end

   def milestones
     today = Date.today

     milestones = @instance.get("projects/#{@id}/milestones")

     milestones.select!  { |ms| ms['state'] != 'closed' && ms['title'] =~ /\A\d+.\d+\z/ }
     milestones.select!  { |ms| ms['due_date'] && Date.parse(ms['due_date']) >= today }
     milestones.sort_by! { |ms| ms['title'].split('.').map(&:to_i) }

     milestones
   end

   def milestone(milestone_id)
     @instance.get("projects/#{@id}/milestones/#{milestone_id}")
   end

   def milestone_direction_issues(milestone_id)
     @instance.get("projects/#{@id}/issues", {
       milestone: milestone_id,
       labels: 'direction'
     })
   end

   def wishlist_issues(label, exclude: nil)
     issues = @instance.get("projects/#{@id}/issues", {
       labels: 'direction',
       state: 'opened',
       per_page: 100,
       sort: 'asc'
     })

     issues.select! { |issue| wishlist_milestone?(issue['milestone']) }
     issues.select! { |issue| issue['labels'].include?(label) }
     issues.select! { |issue| (issue['labels'] & exclude).empty? } if exclude

     issues
   end

   def name
     project['name']
   end

   def web_url
     project['web_url']
   end

   def project
     @project ||= @instance.get("projects/#{@id}")
   end

   private

   def wishlist_milestone?(milestone)
     milestone.nil? || milestone['title'] == 'Backlog'
   end
end

def edition
  @edition ||= begin
    com = GitLabInstance.new
    ce  = GitLabProject.new('gitlab-org%2Fgitlab-ce', com)
    ee  = GitLabProject.new('gitlab-org%2Fgitlab-ee', com)

    [ce, ee]
  end
end

def generate_direction
  $stdout.print "Generating direction..."

  output = StringIO.new

  edition.each do |project|
    milestones = project.milestones

    output.puts "### #{project.name}"
    output.puts

    milestones.each do |ms|
      issues = project.milestone_direction_issues(ms['title'])

      next if issues.empty?

      output.puts "- [#{ms['title']}](#{project.web_url}/milestones/#{ms['iid']})"

      issues.each do |issue|
        output.puts "  - [#{issue['title']}](#{issue['web_url']})\n"
      end

      output.puts
    end
  end

  $stdout.puts " done!"

  output.string
end

def label_list(label, exclude: nil)
  output = StringIO.new

  edition.each do |project|
    issues = project.wishlist_issues(label, exclude: exclude)

    issues.each do |issue|
      output.puts "- [#{issue['title']}](#{issue['web_url']})"
    end
  end

  output.puts "- No current issues" if output.string.empty?

  output.string
end

def wishlist_labels
  [
    'pages',
    'container registry',
    'Performance',
    'moonshots',
    'issues',
    'major wins',
    'usability',
    'code review',
    'vcs for everything',
    'ee product',
    'monitoring',
    'deploy'
  ]
end

def generate_wishlist
  $stdout.print "Generating wishlist..."

  wishlist_output = {}

  wishlist_labels.each do |label|
    wishlist_output[label] = label_list(label)
  end

  wishlist_output["CI"] = label_list('CI', exclude: ['pages', 'monitoring', 'deploy', 'container registry'])

  $stdout.puts " done!"

  wishlist_output
end
