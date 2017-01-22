require 'json'
require 'yaml'

# Loads data/team.yml and generates JSON data to plot the organization chart.
class OrgChart
  def team_data
    @team = YAML.load_file('data/team.yml')
    @title_to_person_map = {}

    normalize_reports_to_field
    build_json_data
  end

  def team_data_tree
    tree = Hash.new do |h, k|
      h[k] = {
        name: nil,
        lead: nil,
        children: []
      }
    end

    team_data.each do |member|
      name, lead = member.values_at(:name, :lead)
      tree[name].merge!(member)
      tree[lead][:children].push(tree[name])
    end

    tree[nil][:children]
  end

  private

  def normalize_reports_to_field
    # Normalize reports_to field to map roles to the right people
    # (e.g. CEO -> Chief Executive Officer (CEO))
    @team.each do |entry|
      name = entry['name']
      role = normalize_role(entry['role'])
      entry['role'] = role
      entry['reports_to_person'] = normalize_role(entry['reports_to'])
      # Assumes titles are unique among people who have reports
      @title_to_person_map[role] = name
    end
  end

  def build_json_data
    # Build only the data we need
    @team.map do |entry|
      reports_to = entry['reports_to_person']

      {
        name: entry['name'],
        lead: @title_to_person_map.fetch(reports_to, nil),
        title: entry['role'],
        speciality: entry.fetch('speciality', nil)
      }
    end
  end

  def strip_tags(str)
    str.gsub(%r{</?[^>]*>}, '')
  end

  def normalize_role(role)
    aliases = {
      'CEO' => 'Chief Executive Officer (CEO)',
      'CRO' => 'Chief Revenue Officer (CRO)',
      'CMO' => 'Chief Marketing Officer (CMO)',
      'CFO' => 'Chief Financial Officer (CFO)'
    }

    role = strip_tags(role)
    role = role.gsub('Co-founder, ', '')

    aliases.fetch(role, role)
  end
end
