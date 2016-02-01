require 'oga'
require 'httparty'

output = ''

output << "---
layout: markdown_page
title: List of all GitLab releases
---
\n"

def do_not_list(input)
  [ "Other changes",
    "Upgrade barometer",
    "Installation",
    "Updating",
    "Enterprise Edition"
  ].include? input
end

VERSIONS = [
  "8.4", "8.3","8.2","8.1","8.0","7.14","7.13","7.12","7.11","7.10",
  "7.9","7.8"
]

base_url = 'https://about.gitlab.com'
dec = "##"

year = 2016
month = 1
major_version = 8
minor_version = 4


desc 'Generate Release List Markdown Page'
task :release_list do
  print 'Retrieving GitLab releases..'

  VERSIONS.each do |version|
    print '.'
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

  puts ''
  puts 'Generating release list..'

  out_file = File.new("source/release-list/index.md", "w")
  out_file << output
  out_file.close
end
