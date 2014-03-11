require 'rubygems'
require 'daemons'

Daemons.run_proc('recurly.rb', {:dir_mode => :normal, :dir => "/opt/sinatra/pids", :monitor => true}) do
  Dir.chdir("/home/deploy/recurly")
  exec "RACK_ENV=production ruby recurly.rb"
end
