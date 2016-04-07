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
