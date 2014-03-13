require 'rubygems'
require 'daemons'

Daemons.run_proc('deploy.rb', {:dir_mode => :normal, :dir => "/opt/webhook/pids", :monitor => true}) do
  Dir.chdir("/home/deploy/webhook")
  system "sh -c 'ruby deploy.rb'"
end
