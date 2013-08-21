require 'json'

BUILD_DIR = '_site/'
DEPLOY_BUCKET = 'www.gitlab.com'
STAGING_PREFIX = "#{DEPLOY_BUCKET}.staging."
STAGING_BUCKET = STAGING_PREFIX + `git log -1 --format='format:%H'`
DEPLOY_BRANCH = 'master'
S3_CMD = %w{s3cmd -c .s3cfg}

AWS_CREDENTIALS = {
  'AWS_ACCESS_KEY_ID' => `awk '/access_key/ {print $3}' .s3cfg`.chomp,
  'AWS_SECRET_ACCESS_KEY' => `awk '/secret_key/ {print $3}' .s3cfg`.chomp,
}

def s3_sync(source, destination)
  system *S3_CMD, *%w{sync --delete-removed -P}, source, "s3://#{destination}"
end

def s3_create_bucket(bucket_name)
  unless system(AWS_CREDENTIALS, *%W(aws s3 create-bucket --bucket #{bucket_name}))
    raise "Could not create bucket #{bucket_name}"
  end
  puts
end

def s3_enable_bucket_website(bucket_name)
  unless system(
    AWS_CREDENTIALS,
    *%W(aws s3 put-bucket-website --bucket #{bucket_name}),
    *%W( --website-configuration #{JSON.dump({'index_document' => {'suffix' => 'index.html'}})})
  )
    raise "Could not enable web access for #{bucket_name}"
  end
  puts
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
  s3_sync BUILD_DIR, DEPLOY_BUCKET
end

task :create_bucket do
  s3_create_bucket(STAGING_BUCKET)
  s3_enable_bucket_website(STAGING_BUCKET)
end

desc 'Creating staging bucket on S3'
task :stage, [:s3_cfg] => [:no_changes, :build, :create_bucket] do
  s3_sync(BUILD_DIR, STAGING_BUCKET) || abort("Failed to sync")
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
