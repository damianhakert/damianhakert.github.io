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
    post.puts "title: \"#{title.gsub(/&/,'&amp;')}\""
    post.puts "author: "
    post.puts "author_twitter: "
    post.puts "categories: "
    post.puts "image_title: "
    post.puts "description: "
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
  template_text.gsub!('X_X', version.gsub('.', '_'))
  template_text.gsub!('X.X', version)
  template_text.gsub!('X-X', version.gsub('.', '-'))

  open(filename, 'w') do |post|
    post.puts template_text
  end
end

desc 'Build the site in public/ (for deployment)'
task :build do
  build_cmd = %W(middleman build --verbose)
  if !system(*build_cmd)
    raise "command failed: #{build_cmd.join(' ')}"
  end
end

PDFS = %w{
  public/terms/print/githost_terms.pdf
  public/terms/print/gitlab_com_terms.pdf
  public/terms/print/gitlab_consultancy_terms.pdf
  public/terms/print/gitlab_subscription_terms.pdf
  public/terms/print/gitlab_subscription_terms_sig.pdf
  public/high-availability/gitlab-ha.pdf
  public/features/gitlab-features.pdf
}

PDF_TEMPLATE = 'pdf_template.tex'

# public/foo/bar.pdf depends on public/foo/bar.html
rule %r{^public/.*\.pdf} => [->(f) { f.pathmap('%X.html') }, PDF_TEMPLATE] do |pdf|
  # Avoid distracting 'newline appended' message
  open(pdf.source, 'a') { |f| f.puts }
  # Rewrite the generated HTML to fix image links for pandoc. Image paths
  # need to be relative paths starting with 'public/'.
  IO.popen(%W(ed -s #{pdf.source}), 'w') do |ed|
    ed.puts <<-'EOS'
H
g/\.\.\/images\// s//\/images\//g
g/'\/images\/ s//'public\/images\//g
g/"\/images\// s//"public\/images\//g
wq
EOS
  end
  options = %W(--template=#{PDF_TEMPLATE} --latex-engine=xelatex -V date=#{Time.now.to_s})
  warn "Generating #{pdf.name}"
  cmd = ['pandoc', *options, '-o', pdf.name, pdf.source]
  abort("command failed: #{cmd.join(' ')}") unless system(*cmd)
end

desc 'Generate PDFs'
task :pdfs => PDFS
