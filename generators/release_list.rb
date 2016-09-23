require 'oga'
require 'httparty'

VERSIONS = [
  "8.12", "8.11", "8.10", "8.9", "8.8", "8.7", "8.6", "8.5", "8.4", "8.3","8.2","8.1","8.0","7.14","7.13","7.12","7.11","7.10",
  "7.9","7.8"
]

class ReleaseList
  def initialize

  end

  def content
    print "Generating release list..."
    base_url = 'https://about.gitlab.com'
    dec = "##"
    year = 2016
    month = 9
    next_version = VERSIONS[0]
    major_version = next_version.split(".").first
    minor_version = next_version.split(".").last

    output = ''
    VERSIONS.each do |version|
      $stdout.flush
      major_version = version.split('.').first
      minor_version = version.split('.').last

      month.to_s.length < 2 ? zero = '0' : zero = ''

      url = "#{base_url}/#{year}/#{zero}#{month}/22/gitlab-#{major_version}-#{minor_version}-released"

      output << "#{dec} [GitLab #{major_version}.#{minor_version}](#{url}) \n\n"

      page = Oga.parse_xml(HTTParty.get(url))
      page.css('h2').each do |heading|
        text = heading.children.first.text
        unless do_not_list(text)
          output << "- #{heading.children.first.text}"
          output << "\n"
        end
      end

      output << "\n"

      if month == 1
        month = 12
        year = year - 1
      else
        month = month - 1
      end
    end

    print "\n"

    output
  end

  def do_not_list(input)
    [ "Other changes",
      "Upgrade barometer",
      "Installation",
      "Updating",
      "Enterprise Edition"
    ].include? input
  end
end
