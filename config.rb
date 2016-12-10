require 'generators/direction'
require 'generators/release_list'
require 'generators/org_chart'
require 'extensions/breadcrumbs'

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
  ugly: true,
  format: :html5
}

activate :syntax, line_numbers: false

set :markdown_engine, :kramdown
set :markdown, tables: true, hard_wrap: false, input: "GFM"

activate :blog do |blog|
  blog.sources = "posts/{year}-{month}-{day}-{title}.html"
  blog.permalink = "{year}/{month}/{day}/{title}/index.html"
  blog.layout = "post"
  # Allow draft posts to appear on all branches except master (for Review Apps)
  blog.publish_future_dated = true if ENV['CI_BUILD_REF_NAME'].to_s != 'master'

  blog.summary_separator = /<!--\s*more\s*-->/

  blog.custom_collections = {
    categories: {
      link: '/blog/categories/{categories}/index.html',
      template: '/category.html'
    }
  }
end

activate :autoprefixer do |config|
  config.browsers = ['last 2 versions', 'Explorer >= 9']
end

activate :breadcrumbs, wrapper: :li, separator: '', hide_home: true, convert_last: false

# Reload the browser automatically whenever files change
unless ENV['ENABLE_LIVERELOAD'] != '1'
  configure :development do
    activate :livereload
  end
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

  def xml_feed_content(article)
    content = article.body

    if article.data.image_title
      content << "<img src='#{data.site.url}#{article.data.image_title}' class='webfeedsFeaturedVisual' style='display: none;' />"
    else
      content << "<img src='#{data.site.url}#{image_path("default-blog-image.png")}' class='webfeedsFeaturedVisual' style='display: none;' />"
    end

    h(content)
  end

  def markdown(text)
    Tilt['markdown'].new { text }.render
  end

  def open_jobs
    data.jobs.select(&:open).sort_by(&:title)
  end

  def job_for_current_page
    open_jobs.detect do |job|
      job.description.start_with?("/#{File.dirname(current_page.request_path)}")
    end
  end

  def font_url(current_page)
    fonts = ["Source+Sans+Pro:300,400,600"]

    if current_page.data.extra_font
      fonts = fonts.concat current_page.data.extra_font
    end
    fonts = fonts.join("|")

    "//fonts.googleapis.com/css?family=#{fonts}"
  end

  def highlight_active_nav_link(link_text, url, options = {})
    options[:class] ||= ""
    options[:class] << " active" if url == current_page.url
    link_to(link_text, url, options)
  end

end

# Build-specific configuration
configure :build do
  set :build_dir, "public"
  activate :minify_css
  activate :minify_javascript
  activate :minify_html

  ## Direction page
  if PRIVATE_TOKEN
    proxy "/direction/index.html", "/direction/template.html", locals: { direction: generate_direction, wishlist: generate_wishlist }, ignore: true
  end

  ## Release list page
  releases = ReleaseList.new
  proxy "/release-list/index.html", "/release-list/template.html", locals: { list: releases.generate }, ignore: true
end

org_chart = OrgChart.new
proxy "/team/structure/index.html", "/team/structure/template.html", locals: { team_data_tree: org_chart.team_data_tree }, ignore: true

page '/404.html', directory_index: false

ignore '/direction/template.html'
ignore '/includes/*'
ignore '/release-list/template.html'
ignore '/team/structure/org-chart/template.html'
ignore '/source/stylesheets/highlight.css'
ignore '/category.html'
