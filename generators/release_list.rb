require 'date'

# Don't generate for versions prior to 8.0
CUTOFF = Date.new(2015, 9, 22)

# Generates the Markdown used by the `/release-list/` page based on monthly
# release blog posts in this repository
class ReleaseList
  def generate(output = StringIO.new)
    release_posts.each do |post|
      output.puts "## [#{post.version}](#{post.relative_url})"
      output.puts

      post.highlights.each do |highlight|
        output.puts "- #{highlight}"
      end

      output.puts
    end

    # Return the final string if `output` supports it
    output.string if output.respond_to?(:string)
  end

  private

  class ReleasePost
    attr_reader :filename, :title, :date, :version

    def initialize(filename)
      @filename = filename.strip

      extract_attributes
    end

    def relative_url
      sprintf('/%d/%0.2d/%0.2d/%s', date.year, date.month, date.day, title)
    end

    # Returns an Array of "highlights"
    #
    # A highlight is anything that gets a level two header - `##` - but isn't in
    # the `EXCLUSIONS` list.
    def highlights
      return @highlights if @highlights

      lines = File.read(filename).lines
      @highlights = lines
        .select { |l| l =~ /\A##[^#]/ }
        .map    { |l| l.sub(/\A##([^#]+)\z/, '\1').strip }
        .reject { |l| EXCLUSIONS.include?(l) }
    end

    private

    # These headers are in every post and should not be considered highlights
    EXCLUSIONS = [
      'Other changes',
      'Upgrade barometer',
      'Installation',
      'Updating',
      'Enterprise Edition'
    ].freeze

    def extract_attributes
      match = filename.match(
        %r{
          (?<date>\d{4}-\d{2}-\d{2})
          -
          (?<title>
            gitlab-
            (?<major>\d{1,2})-(?<minor>\d{1,2})
            -released
          )
        }xi
      )

      @title   = match['title']
      @date    = Date.parse(match['date'])
      @version = "#{match['major']}.#{match['minor']}"
    end
  end

  # Returns an Array of monthly release posts in descending order
  def release_posts
    root = File.expand_path('../source/posts', __dir__)

    # find's `-regex` option is too dumb to do what we want, so use grep too
    find = %Q(find #{root} -type f -iname "*-released.html.md")
    grep = %Q(grep #{grep_flags} '\\d{4}-\\d{2}-22-gitlab-\\d{1,2}-\\d{1,2}-released')
    sort = %q(sort -n)

    `#{find} | #{grep} | #{sort}`
      .lines
      .map    { |path| ReleasePost.new(path) }
      .reject { |post| post.date < CUTOFF }
      .reverse
  end

  def grep_flags
    # GNU supports PCRE via `-P`; for others (i.e., BSD), we want `-E`
    if `grep -V`.include?('GNU grep')
      '-P'
    else
      '-E'
    end
  end
end

# Print to stdout when this file is run directly
if $PROGRAM_NAME == __FILE__
  ReleaseList.new.generate($stdout)
end
