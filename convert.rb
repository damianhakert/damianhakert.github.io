# Converting HTML to MD
# Usage:
# ruby convert.rb DIRECTORY_PATH
# Example:
# ruby convert.rb source/_posts
require 'yaml'
require 'safe_yaml'
require 'reverse_markdown'

if ARGV.empty? || ARGV[0].nil?
  abort("Incorrect usage, should be: ruby convert.rb directory_path")
end

file_path = ARGV[0]

abort("Directory doesn't exist, check the path provided.") unless Dir.exist? file_path

Dir.glob("#{file_path}/*.html") do |file_name|
  puts "****************** #{file_name}"
  before = File.read(file_name)
  if before =~ /\A(---\s*\n.*?\n?)^(---\s*$\n?)/m
    front = $1
    content = ReverseMarkdown.parse $'
    after = "#{front}---\n#{content}"

    puts "*****The file has been read as: *****"
    puts before
    puts "+++++The file has been converted to: +++++"
    puts after

    filename_md = file_name.gsub(".html",".md")
    puts "-----Writing to #{filename_md}-----"
    File.write(filename_md, after)

    puts "*****Removing #{file_name}*****"
    File.delete(file_name)
  end
end
