require 'middleman'
require 'rack/utils'
require 'padrino-helpers'

class Breadcrumbs < Middleman::Extension
  include Padrino::Helpers

  option :separator, ' > ', 'Default separator between breadcrumb levels'
  option :wrapper, nil, 'Name of tag (as symbol) in which to wrap each breadcrumb level, or nil for no wrapping'

  expose_to_template :breadcrumbs

  def initialize(app, options_hash = {}, &block)
    super
    @separator = options.separator
    @wrapper = options.wrapper
  end

  def breadcrumbs(page, separator: @separator, wrapper: @wrapper)
    hierarchy = [page]
    hierarchy.unshift hierarchy.first.parent while hierarchy.first.parent
    hierarchy.collect.with_index do |page, i|
      if page.path != "index.html"
        if (i+1) == hierarchy.size
          content_tag(:li, page.data.title)
        else
          wrap link_to(page.data.title, "/#{page.path}"), wrapper: wrapper
        end
      end
    end.join(h separator)
  end

  private

  def wrap(content, wrapper: nil)
    wrapper ? content_tag(wrapper) { content } : content
  end
end

::Middleman::Extensions.register(:breadcrumbs, Breadcrumbs)
