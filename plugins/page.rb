module Jekyll
  module Filters
    def remove_date_from_path(input)
      path = input.split("/")
      path.shift(4)
      path.join
    end
  end
end

Liquid::Template.register_filter(Jekyll::Filters)
