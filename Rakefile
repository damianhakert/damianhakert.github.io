require 'scss_lint/rake_task'
require 'yaml-lint'

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

task build: ["build:site"] do
end

namespace :build do
  task :site do
    system "bundle exec middleman build"

    # The below should be removed for going live
    # This is just for testing on GitLab pages
    original_string_or_regex = /(href|src)=(?:"|')\s*(.*?)\s*(?:"|')/

    Dir.glob("public/**/*.html") do |file_name|
      if !File.directory?(file_name)
        text = File.read(file_name)
        text = text.force_encoding("UTF-8")
        replace = text.gsub(original_string_or_regex) do |link|
          if !link.include?("http")
            "#{$1}='/about-gitlab-com#{$2}'"
          end
        end
        File.open(file_name, "w") { |file| file.puts replace }
      end
    end
  end
end
