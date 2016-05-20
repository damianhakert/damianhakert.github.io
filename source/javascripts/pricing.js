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
      $this.find(target).equalHeights();
    });
  }, 500);

  $('.js-faq-question').on('click', function (e) {
    e.preventDefault()
    $(this).closest('.faq-item').toggleClass('is-open');
  });
});
