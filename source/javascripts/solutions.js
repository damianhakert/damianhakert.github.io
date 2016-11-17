$(function () {
  $('.js-scroll-to').on('click', function(e) {
    e.preventDefault();

    var $target = $(this).attr('href');
    $('body').animate({
      scrollTop: $target.offset().top
    });
  });

  // Scroll effect on steps
  var $steps = $('.js-step, .js-learn-more');

  $(window).on('scroll', function() {
    $steps.each(function() {
      var isOnScreen = isElementOnScreen($(this), ($(window).scrollTop() - 150));

      if (isOnScreen && !$(this).hasClass('is-visible')) {
        $(this).addClass('is-visible');
      }
    });
  });
});
