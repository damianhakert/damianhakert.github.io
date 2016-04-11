require 'scss_lint/rake_task'
require 'yaml-lint'
require "stringex"

desc "Run all lint tasks"
task lint: ['lint:scss', 'lint:yaml'] do
end

namespace :lint do
  desc "Lint SCSS files"
  task :scss do
    SCSSLint::RakeTask.new
    Rake::Task["scss_lint"].invoke
  end

  desc "Lint YAML files"
  task :yaml do
    failed = 0
    Dir["data/*.yml"].each do |yml|
      lint = YamlLint.new(yml)
      failed = failed + lint.do_lint
    end

    exit failed unless failed == 0
  end
end

desc "Being a new post"
task :new_post, :title do |t, args|
  if args.title
    title = args.title
  else
    puts "Enter a title for your post: "
    title = STDIN.gets.chomp
  end

  filename = "source/posts/#{Time.now.strftime('%Y-%m-%d')}-#{title.to_url}.html.md"
  puts "Creating new post: #{filename}"
  open(filename, 'w') do |post|
    post.puts "---"
    post.puts "layout: post"
    post.puts "title: \"#{title.gsub(/&/,'&amp;')}\""
    post.puts "date: #{Time.now.strftime('%Y-%m-%d')}"
    post.puts "author: "
    post.puts "author_twitter: "
    post.puts "categories: "
    post.puts "image_title: "
    post.puts "---"
  end
end
