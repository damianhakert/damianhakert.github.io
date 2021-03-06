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
    response = HTTParty.get(url, headers: { "PRIVATE-TOKEN" => @private_token })

    puts "Error in retrieving URL #{url}: #{response.code}" if response.code != 200

    response
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
     result = result.select { |ms| ms["state"] != "closed" &&  /^\d{1,}.\d{1,}$/.match(ms["title"])}
     result.sort_by! do |ms|
       ms["title"].split(".").map! {|i| i.to_i}
     end
   end

   def milestone(milestone_id)
     @instance.call("/projects/#{@id}/milestones/#{milestone_id}")
   end

   def milestone_direction_issues(milestone_id)
     @instance.call("/projects/#{@id}/issues", "?milestone=#{milestone_id}&labels=direction")
   end

   def all_direction_issues
     @direction_issues ||= @instance.call("/projects/#{@id}/issues", "?labels=direction&state=opened&per_page=100&sort=asc")
     #result << @instance.call("/projects/#{@id}/issues", "?labels=direction&state=opened&per_page=100&sort=asc&page=2")
   end

   def coming_soon_issues
     result = all_direction_issues.select { |issue| issue["labels"].include? "coming soon" }
   end

   def wishlist_issues(label,not_label=nil)
     result = all_direction_issues.select { |issue| issue["labels"].include? label }
     result = result.reject { |issue| (issue["labels"].include? "coming soon")}
     result = result.select { |issue| (issue["labels"] & not_label).empty? } if (not_label)
     result = result.select { |issue| issue["milestone"].nil? || issue["milestone"]["title"] == "Backlog" }
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

def issue_bullet(project,issue)
  output = "- [#{issue["title"]}](#{project.web_url}/issues/#{issue["iid"]})"
  output << ' <kbd>EE Starter</kbd>' if(issue["labels"].include? "EE Starter")
  output << ' <kbd>EE Premium</kbd>' if(issue["labels"].include? "EE Premium")
  output << "\n"
  output
end

def generate_direction
  print "Generating direction..."
  com = GitLabInstance.new('https://gitlab.com', PRIVATE_TOKEN, 'GitLab.com')
  ce = GitLabProject.new('gitlab-org%2Fgitlab-ce',com)
  ee = GitLabProject.new('gitlab-org%2Fgitlab-ee',com)
  edition = [ce,ee]
  direction_output = ''

  edition.each do |project|
    milestones = project.milestones
    direction_output << "### #{project.name}\n\n"

    milestones.each do |ms|
      if ms["due_date"] && Date.parse(ms["due_date"]) >= Date.today

        issues = project.milestone_direction_issues(ms["title"])
        direction_output << "#### [#{ms["title"]}](#{project.web_url}/milestones/#{ms["iid"]}) \n\n"

        issues.each do |issue|
          direction_output << issue_bullet(project,issue)
        end

        direction_output << "\n"
      end
    end
    issues = project.coming_soon_issues
    if(issues)
      direction_output << "#### [Coming Soon](#{project.web_url}/issues?label_name[]=coming%20soon)\n\n"

      issues.each do |issue|
        direction_output << issue_bullet(project,issue)
      end

      direction_output << "\n"
    end
  end
  print "\n"

  direction_output
end

def edition
  @edition ||= begin
    com = GitLabInstance.new('https://gitlab.com', PRIVATE_TOKEN, 'GitLab.com')
    ce = GitLabProject.new('gitlab-org%2Fgitlab-ce',com)
    ee = GitLabProject.new('gitlab-org%2Fgitlab-ee',com)
    [ce,ee]
  end
end

def label_list(label,not_label=nil)
  output = ''
  edition.each do |project|
    issues = project.wishlist_issues(label, not_label)
    issues.each do |issue|
      output << issue_bullet(project,issue)
    end
  end
  output = "No current issues\n" if (output.empty?)
  output
end

def generate_wishlist
  print "Generating wishlist..."
  wishlist_output = {}

  ["chat commands", "ci-build", "code review", "container registry", "deploy", "deliver", "EE Premium", "issues", "pages", "pipeline", "major wins", "moonshots", "performance", "Prometheus", "test", "usability", "vcs for everything", "issue boards"].each do |label|
    wishlist_output[label] = label_list(label)
  end
  wishlist_output["CI"] = label_list("CI",["ci-build", "deploy", "deliver", "pages", "pipeline", "test", "container registry", "chat commands"])
  print "\n"

  wishlist_output
end
