$(function () {
  var $regions = $('.reseller-region');
  var $regionItems = $('.reseller-item');

  $regions.on('click', function(e) {
    var $element = $(this);
    var id = $element.attr('id');

    if ($element.hasClass('active')) {
      $regions.removeClass('active');
      $regionItems.removeClass('zoomIn')
        .fadeOut().promise().done(function() {
          $regionItems.addClass('zoomIn').fadeIn();
      });
    } else {
      $regions.removeClass('active');
      $element.addClass('active');
      $regionItems.removeClass('zoomIn')
        .fadeOut(100).promise().done(function() {
          $regionItems.filter('.region-' + id).addClass('zoomIn').fadeIn(200)
      });
    }
  });
});
