BUILD_DIR = '_build/'
BUILD_IGNORE = %w{.gitignore Rakefile README.md}
BUCKET = 's3://www.gitlab.com'
DEPLOY_BRANCH = 'master'

task :clean do
  rm_rf BUILD_DIR
end

desc "Build website in #{BUILD_DIR}"
task :build => :clean do
  mkdir_p BUILD_DIR
  $stderr.print "Building... "
  IO.popen(%W(cpio -pd #{BUILD_DIR}), 'w') do |io|
    io.puts(`git ls-files`.split("\n") - BUILD_IGNORE)
  end
end

desc 'Sync working tree to S3'
task :sync, [:s3_cfg] => [:no_changes, :check_branch, :build] do |t, args|
  sync_options = %w{--delete-removed -P}
  if args.s3_cfg
    sync_options << '-c' << args.s3_cfg
  end
  system 's3cmd', 'sync', *sync_options, BUILD_DIR, BUCKET
end

task :check_branch do
  unless `git rev-parse --abbrev-ref HEAD`.chomp == DEPLOY_BRANCH
    abort("Can only deploy from #{DEPLOY_BRANCH}")
  end
end

task :no_changes do
  unless system(*%w{git diff --quiet HEAD})
    abort("Cannot deploy when there are uncomitted changes")
  end
end

task :default => :build
