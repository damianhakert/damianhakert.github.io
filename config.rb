###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

set :haml, {
  :ugly => true,
  :format => :html5
}

activate :blog do |blog|
  blog.sources = "posts/{year}-{month}-{day}-{title}.html"
  blog.permalink = "{year}/{month}/{day}/{title}/index.html"
  blog.layout = "post"
end

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload
end

##
# Helper methods
##
helpers do
  def icon(icon, cssclass = "", attrs = {})
    width = attrs[:width] || 76
    height = attrs[:height] || 76
    label = attrs[:label] || ""
    content_tag :svg, viewbox: "0 0 76 76", width: width, height: height, class: cssclass, aria: {label: label}, role: "img" do
      partial "includes/icons/#{icon}.svg"
    end
  end
end

# Build-specific configuration
configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :minify_html
end

ignore "/includes/*"
