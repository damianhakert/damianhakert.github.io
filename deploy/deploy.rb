require 'rubygems'
require 'sinatra'
require 'json'

post '/webhook' do
  json = JSON.parse(request.env["rack.input"].read)
  if json && json['repository'].empty? && json['repository']['ref'] != "refs/heads/master"
    puts "Failed. Either the payload is empty or not master branch: #{json['repository']['ref']}."
  else
    # Make sure everything finishes before starting again in case hook fires again.
    while true do
      location = json['repository']['homepage']
      repo_name = "#{location}.git"
      puts "Preparing target location: "
      if system("rm -rf /tmp/site")
        puts "Done."
      else
        abort "Failed."
      end
      puts "Cloning #{repo_name} from #{location}: "
      if system("git clone #{repo_name} /tmp/site")
        puts "Done."
      else
        abort "Cloning failed. Check if location #{location} is correct."
      end

      puts "Installing gems: "
      if system("cd /tmp/site && bundle install --path /home/deploy/bundle")
        puts "Done."
      else
        abort "Bundle install failed."
      end

      puts "Generating pages: "
      if system("cd /tmp/site && bundle exec rake build")
        puts "Done."
      else
        abort "Failed generating pages: "
      end

      puts "Copying public directory: "
      if system("rsync -r --delete-after /tmp/site/public/ /home/deploy/public/")
        puts "Done."
      else
        abort "Failed to copy the public directory"
      end

      puts "Copying recurly directory: "
      if system("rsync -r /tmp/site/recurly/ /home/deploy/recurly/")
        puts "Done."
      else
        abort "Failed to copy the recurly directory"
      end
      break
    end
  end
end
