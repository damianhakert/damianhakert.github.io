$(function() {
  var $compareTable = $('.compare-table');
  var $tableHolder = $compareTable.closest('.table-responsive');
  var $compareTableTds = $('td', $compareTable);
  var $thead = $('thead', $compareTable);
  var $th = $thead.find('th');
  var $nav = $('.navbar-default');

  $thead.affix({
    offset: {
      top: function() {
        return (this.top = $thead.offset().top - ($nav.outerHeight() + 10));
      },
    },
  }).on('affixed.bs.affix', function() {
    $th.each(function(i) {
      var $th = $(this);
      $th.width($compareTableTds.eq(i).outerWidth());
    });

    $tableHolder.css({
      paddingTop: $thead.outerHeight(),
    });
  }).on('affixed-top.bs.affix', function() {
    $th.css({
      width: '',
    });

    $tableHolder.css({
      paddingTop: '',
    });
  });

  if ($thead.is('.affix')) {
    $thead.trigger('affixed.bs.affix');
  }
});
