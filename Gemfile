# If you do not have OpenSSL installed, change
# the following line to use 'http://'
source 'https://rubygems.org'

# For faster file watcher updates on Windows:
gem 'wdm', '~> 0.1.0', platforms: [:mswin, :mingw]

# Windows does not come with time zone data
gem 'tzinfo-data', platforms: [:mswin, :mingw, :jruby]

# Middleman Gems
gem "middleman", "~> 4.1"
gem "middleman-blog", git: "https://github.com/middleman/middleman-blog.git"
gem "middleman-livereload"
gem "middleman-minify-html"
gem "middleman-autoprefixer"
gem "middleman-syntax"

gem 'kramdown', '~> 1.10'
gem 'nokogiri'
gem 'therubyracer'

# For feed.xml.builder
gem "builder", "~> 3.0"

gem "httparty"
gem "stringex"

group :development, :test do
  gem 'docopt'
  gem 'scss_lint', require: false
  gem 'yaml-lint', require: false
end
