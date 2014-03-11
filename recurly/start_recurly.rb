require 'rubygems'
require 'daemons'

pwd = Dir.pwd
Daemons.run_proc('recurly.rb', {:dir_mode => :normal, :dir => "/opt/sinatra/pids"}) do
  Dir.chdir(pwd)
  exec "RACK_ENV=production ruby recurly.rb"
end
