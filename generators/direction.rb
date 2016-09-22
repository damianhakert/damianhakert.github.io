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

   def wishlist_issues(label,not_label=nil)
     result = @instance.call("/projects/#{@id}/issues", "?labels=direction&state=opened&per_page=100&sort=asc")
     #result << @instance.call("/projects/#{@id}/issues", "?labels=direction&state=opened&per_page=100&sort=asc&page=2")
     result = result.select { |issue| issue["labels"].include? label }
     result = result.reject { |issue| issue["labels"].include? not_label } if (not_label)
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
      output << "- [#{issue["title"]}](#{project.web_url}/issues/#{issue["iid"]})\n"
      $stdout.flush
    end
  end
  output = "No current issues\n" if (output.empty?)
  output
end

def generate_wishlist
  print "Generating wishlist..."
  wishlist_output = {}

  ["pages","container registry","Performance","moonshots","issues","major wins","usability","code review","vcs for everything","ee product"].each do |label|
    wishlist_output[label] = label_list(label)
  end
  wishlist_output["CI"] = label_list("CI","pages")
  print "\n"

  wishlist_output
end
