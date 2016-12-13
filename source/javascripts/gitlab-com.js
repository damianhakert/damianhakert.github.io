$(function () {
  $.fn.equalHeights = function() {
    var maxHeight = 0,
    $this = $(this);

    $this.each( function() {
      var height = $(this).innerHeight();

      if (height > maxHeight) {
        maxHeight = height;
      }
    });

    return $this.css('height', maxHeight);
  };

  setTimeout(function () {
    $('[data-equal]').each(function(){
      var $this = $(this),
      target = $this.data('equal');

      if ($(window).width() > 992) {
        $this.find(target).equalHeights();
      } else {
        $this.find(target).css('height', '');
      }
    });
  }, 500);
});
