require 'httparty'

PRIVATE_TOKEN = ENV["PRIVATE_TOKEN"]

class GitLabInstance
  def initialize(endpoint, private_token, name)
    @endpoint = "#{endpoint}/api/v3"
    @private_token = private_token
    @name = name
  end

  def call(path, params = "")
    url = @endpoint + path + params
    HTTParty.get(url, headers: { "PRIVATE-TOKEN" => PRIVATE_TOKEN })
  end

  def name
    @name
  end

  def endpoint
    @endpoint
  end
end

class GitLabProject
   def initialize(id, instance)
     @id = id
     @instance = instance
     @name = instance.name
   end

   def milestones
     result = @instance.call("/projects/#{@id}/milestones")
     result = result.select { |ms| ms["state"] != "closed" }
     result.sort_by { |ms| ms["title"] }
   end

   def milestone(milestone_id)
     @instance.call("/projects/#{@id}/milestones/#{milestone_id}")
   end

   def milestone_direction_issues(milestone_id)
     @instance.call("/projects/#{@id}/issues", "?milestone=#{milestone_id}&labels=direction&state=opened")
   end

   def name
     project["name"]
   end

   def web_url
     project["web_url"]
   end

   def project
     @project ||= @instance.call("/projects/#{@id}")
   end

   def endpoint
     @instance.endpoint
   end
end

desc 'Generate Direction Page Issue List'
task :direction_issues do
  print 'Generating direction page'

  # Check if private token is available
  puts "Can't find PRIVATE TOKEN!" unless PRIVATE_TOKEN

  com = GitLabInstance.new('https://gitlab.com', PRIVATE_TOKEN, 'GitLab.com')
  ce = GitLabProject.new('gitlab-org%2Fgitlab-ce',com)
  ee = GitLabProject.new('gitlab-org%2Fgitlab-ee',com)
  edition = [ce,ee]
  output = ''

  edition.each do |project|
    milestones = project.milestones
    output << "## #{project.name}\n\n"

    milestones.each do |ms|
      if ms["due_date"] && Date.parse(ms["due_date"]) > Date.today

        issues = project.milestone_direction_issues(ms["title"])
        output << "### [#{ms["title"]}](#{project.web_url}/milestones/#{ms["iid"]}) \n\n"

        issues.each do |issue|
          output << "- [#{issue["title"]}](#{project.web_url}/issues/#{issue["id"]})\n"
          print '.'
          $stdout.flush
        end

        output << "\n"
      end
    end
  end

  file_path = "source/direction2/index.md"

  original_file = File.read(file_path)
  new_contents = original_file.gsub(/<!-- direction_issues -->/, output)

  File.open(file_path, "w") {|file| file.puts new_contents }
end
