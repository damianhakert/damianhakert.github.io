$(function () {
  var isElementOnScreen = function($el, scrollTop) {
    // Get very bottom of element
    elementBottom = $el.offset().top + $el.outerHeight();
    // Get very top of element
    elementTop = $el.offset().top - scrollTop;
    
    if (elementTop <= $(window).height() && elementBottom - scrollTop >= 0) {
      // Element is on-screen
      return true;
    } else {
      // Element is not on-screen
      return false;
    }
  }

  $('.js-scroll-to').on('click', function(e) {
    e.preventDefault();

    $target = $(this).attr('href');
    $('body').animate({
      scrollTop: $target.offset().top
    });
  });

  // Scroll effect on steps
  $steps = $('.js-step, .js-learn-more');

  $(window).on('scroll', function() {
    $steps.each(function() {
      isOnScreen = isElementOnScreen($(this), ($(window).scrollTop() - 150));

      if (isOnScreen && !$(this).hasClass('is-visible')) {
        $(this).addClass('is-visible');
      }
    });
  });
});
