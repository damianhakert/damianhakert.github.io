xml.instruct!
xml.urlset "xmlns" => "http://www.sitemaps.org/schemas/sitemap/0.9" do
  pages = sitemap.resources.find_all{|p| p.source_file.match(/\.html/) }
  pages.each do |page|
    xml.url do
      xml.loc URI.join(data.site.url, page.url)
    end
  end
end
