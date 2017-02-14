$(function() {
  var $compareTable = $('.compare-table');
  var $compareTableTds = $('td', $compareTable);
  var $thead = $('thead', $compareTable);
  var $nav = $('.navbar-default');

  $thead.affix({
    offset: {
      top: function() {
        return (this.top = $thead.offset().top - ($nav.outerHeight() + 10));
      },
    },
  }).on('affixed.bs.affix', function() {
    $thead.find('th').each(function(i) {
      var $th = $(this);
      $th.width($compareTableTds.eq(i).outerWidth());
    }).closest('.table-responsive').css({
      paddingTop: $thead.outerHeight(),
    });
  }).on('affixed-top.bs.affix', function() {
    $thead.find('th').css({
      width: '',
    }).closest('.table-responsive').css({
      paddingTop: '',
    });
  });

  if ($thead.is('.affix')) {
    $thead.trigger('affixed.bs.affix');
  }
});
