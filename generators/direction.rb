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
    HTTParty.get(url, headers: { "PRIVATE-TOKEN" => @private_token })
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
        direction_output << "### [#{ms["title"]}](#{project.web_url}/milestones/#{ms["iid"]}) \n\n"

        issues.each do |issue|
          direction_output << "- [#{issue["title"]}](#{project.web_url}/issues/#{issue["id"]})\n"
          $stdout.flush
        end

        direction_output << "\n"
      end
    end
  end
  print "\n"

  direction_output
end
