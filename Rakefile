BUILD_DIR = '_site/'
DEPLOY_LOCATION = 'deploy@blue-moon.gitlap.com:public/'
DEPLOY_BRANCH = 'master'
PDFS = FileList['terms/print/*.html'].pathmap('%{^,_site/}X.pdf')

task :clean do
  rm_rf BUILD_DIR
end

desc "Build website in #{BUILD_DIR}"
task :build => [:clean, :jekyll_build, :pdfs] 

task :jekyll_build do
  abort("Jekyll build failed") unless system 'jekyll', 'build'
end

rule %r{^_site/terms/print/.*\.pdf} => [->(f) { f.pathmap('%X.html') }] do |pdf|
  options = %W(--template=_terms_template.tex --latex-engine=xelatex -V date=#{Time.now.to_s})
  warn "Generating #{pdf.name}"
  abort("Pandoc failed") unless system('pandoc', *options, '-o', pdf.name, pdf.source)
end

desc 'Generate PDFs'
task :pdfs => PDFS

desc "Deploy master to #{DEPLOY_LOCATION}"
task :sync => [:no_changes, :check_branch, :build] do
  warn "Deploying to #{DEPLOY_LOCATION}"
  system *%W(rsync --delete-after -r #{BUILD_DIR} #{DEPLOY_LOCATION})
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

task :install do
  warn('Installing nginx config to /etc/nginx/sites-available')
  system('sudo', 'cp', '_support/nginx/www.gitlab.com', '/etc/nginx/sites-available')
end

task :default => :build
