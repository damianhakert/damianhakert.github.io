BUILD_DIR = '_site/'
DEPLOY_BUCKET = 'www.gitlab.com'
STAGING_BUCKET = DEPLOY_BUCKET + '.staging'
DEPLOY_BRANCH = 'master'
S3_CMD = %w{s3cmd -c .s3cfg}
PDFS = FileList['terms/print/*.html'].pathmap('%{^,_site/}X.pdf')

def s3_sync(source, destination)
  system *S3_CMD, *%w{sync --delete-removed -P}, source, "s3://#{destination}"
end

def s3_create_bucket(bucket_name)
  system(*S3_CMD, 'mb', "s3://#{bucket_name}")
end

task :clean do
  rm_rf BUILD_DIR
end

desc "Build website in #{BUILD_DIR}"
task :build => [:clean, :jekyll_build, :pdfs] 

task :jekyll_build do
  system 'jekyll', 'build'
end

rule %r{^_site/terms/print/.*\.pdf} => [->(f) { f.pathmap('%X.html') }] do |pdf|
  options = %W(--template=_terms_template.tex --latex-engine=xelatex -V date=#{Time.now.to_s})
  system 'pandoc', *options, '-o', pdf.name, pdf.source
end

desc 'Generate PDFs'
task :pdfs => PDFS

desc 'Deploy master to S3'
task :sync => [:no_changes, :check_branch, :build] do
  unless s3_sync(BUILD_DIR, DEPLOY_BUCKET)
    raise "Could not sync to #{DEPLOY_BUCKET}"
  end
end

task :create_staging_bucket do
  unless s3_create_bucket(STAGING_BUCKET)
    raise "Could not create staging bucket #{STAGING_BUCKET}"
  end
end

desc 'Creating staging bucket on S3'
task :stage => [:no_changes, :build, :create_staging_bucket] do
  unless s3_sync(BUILD_DIR, STAGING_BUCKET)
    raise "Could not sync to #{STAGING_BUCKET}"
  end
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
