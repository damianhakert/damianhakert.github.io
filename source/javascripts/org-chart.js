google.charts.load('current', {packages:["orgchart"]});
google.charts.setOnLoadCallback(drawOrgChart);

function highlightEmployeeAndTitle(employee, title) {
  return employee + '<div class="employee-title">' + title + '</div>'
}

function drawOrgChart() {
  var inputData = $('.org-chart-div').data('team');

  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Name');
  data.addColumn('string', 'Manager');
  data.addColumn('string', 'ToolTip');

  $.each(inputData, function(index, value) {
    data.addRows([
      [{ v: value['name'], f: highlightEmployeeAndTitle(value['name'], value['title']) },
        value['lead'],
        value['specialty']]
    ]);
  });

  // Create the chart.
  var chart = new google.visualization.OrgChart($('.org-chart-div')[0]);
  // Draw the chart, setting the allowHtml option to true for the tooltips.
  chart.draw(data, {allowHtml: true, allowCollapse: true, size: 'small'});
}
