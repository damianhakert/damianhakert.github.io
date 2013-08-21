BUILD_DIR = '_site/'
BUCKET = 's3://www.gitlab.com'
DEPLOY_BRANCH = 'master'
S3_CMD = %w{s3cmd -c .s3cfg}

def s3_sync(source, destination)
  system *S3_CMD, *%w{sync --delete-removed -P}, source, destination
end

def s3_create_bucket(bucket_name)
  system *S3_CMD, 'mb', bucket_name
end

task :clean do
  rm_rf BUILD_DIR
end

desc "Build website in #{BUILD_DIR}"
task :build => :clean do
  system 'jekyll', 'build'
end

desc 'Sync working tree to S3'
task :sync => [:no_changes, :check_branch, :build] do
  s3_sync BUILD_DIR, BUCKET
end

desc 'Creating staging bucket on S3 (you need to enable Static Hosting manually!)'
task :stage, [:s3_cfg] => [:no_changes, :build] do |t, args|
  staging_bucket = "#{BUCKET}.#{`git log -1 --format='format:%H'`}"
  s3_create_bucket staging_bucket
  s3_sync BUILD_DIR, staging_bucket
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
