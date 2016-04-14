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

desc "Begin a new post"
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

desc "Creates a new release post"
task :new_release_post, :version do |t, args|
  version = args.version
  source_dir = File.expand_path('../source', __FILE__)
  posts_dir = 'posts'

  unless version =~ /\A\d+\.\d+\z/
    raise 'You need to specify version like 8.3'
  end

  mkdir_p "#{source_dir}/#{posts_dir}"

  filename = "#{source_dir}/#{posts_dir}/#{Time.now.strftime('%Y-%m-22')}-gitlab-#{version.gsub('.', '-')}-released.html.md"

  if File.exist?(filename)
    abort("rake aborted!") if ask("#{filename} already exists. Do you want to overwrite?", ['y', 'n']) == 'n'
  end

  puts "Creating new release post: #{filename}"

  template_text = File.read('doc/release_blog_template.html.md')
  template_text.gsub!('date: YYYY-MM-22', "date: #{Time.now.year}-#{Time.now.strftime("%m")}-22")
  template_text.gsub!('X_X', version.gsub('.', '_'))
  template_text.gsub!('X.X', version)
  template_text.gsub!('X-X', version.gsub('.', '-'))

  open(filename, 'w') do |post|
    post.puts template_text
  end
end
