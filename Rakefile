BUILD_DIR = '_build/'
BUILD_IGNORE = %w{.gitignore Rakefile}
BUCKET = 's3://www.gitlab.com'

desc "Build website in #{BUILD_DIR}"
task :build do
  rm_rf BUILD_DIR
  mkdir_p BUILD_DIR
  $stderr.print "Building... "
  IO.popen(%W(cpio -pd #{BUILD_DIR}), 'w') do |io|
    io.puts(build_file_list)
  end
end

def build_file_list
  `git ls-files`.split("\n").reject { |f| BUILD_IGNORE.include?(f) }
end

desc 'Sync working tree to S3'
task :sync, [:s3_cfg] => :build do |t, args|
  sync_options = %w{--delete-removed -P}
  if args.s3_cfg
    sync_options << '-c' << args.s3_cfg
  end
  system 's3cmd', 'sync', *sync_options, BUILD_DIR, BUCKET
end

task :default => :build
