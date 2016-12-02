# If you do not have OpenSSL installed, change
# the following line to use 'http://'
source 'https://rubygems.org'

# For faster file watcher updates on Windows:
gem 'wdm', '~> 0.1.0', platforms: [:mswin, :mingw, :x64_mingw]

# Windows does not come with time zone data
gem 'tzinfo-data', platforms: [:mswin, :mingw, :x64_mingw, :jruby]

# Middleman Gems
gem "middleman", "~> 4.1"
gem "middleman-blog", git: "https://github.com/middleman/middleman-blog.git"
gem "middleman-livereload"
gem "middleman-minify-html"
gem "middleman-autoprefixer"
gem "middleman-syntax"

gem 'kramdown', '~> 1.10'
gem 'nokogiri'
# therubyracer do not compile on Windows. According to [this post](http://stackoverflow.com/questions/6356450/therubyracer-gem-on-windows#comment7926287_6356450),
# looks like it is not needed when we are not deploying.
# So, Windows users can comment this gem to run `bundle install`
gem 'therubyracer'

# For feed.xml.builder
gem "builder", "~> 3.0"

gem "httparty"
gem "oga"
gem "stringex"

group :development, :test do
  gem 'docopt'
  gem 'scss_lint', require: false
  gem 'yaml-lint', require: false
end
