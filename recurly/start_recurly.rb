require 'rubygems'
require 'daemons'

Daemons.run_proc('recurly.rb', {:dir_mode => :normal, :dir => "/opt/recurly/pids", :monitor => true}) do
  Dir.chdir("/home/deploy/recurly")
  system "sh -c 'RACK_ENV=production ruby recurly.rb'"
end
