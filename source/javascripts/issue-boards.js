$(function () {
  var isElementOnScreen = function($el, scrollTop) {
    // Get very bottom of element
    var elementBottom = $el.offset().top + $el.outerHeight();
    // Get very top of element
    var elementTop = $el.offset().top - scrollTop;
    
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

    var $target = $(this).attr('href');
    $('body').animate({
      scrollTop: $target.offset().top
    });
  });

  // Scroll effect on steps
  var $steps = $('.js-step, .js-learn-more');

  var $stickyBanner = $('.js-sticky-banner');
  var $tryGitlabEnterprise = $('.js-try-gitlab-ee');

  $(window).on('scroll', function() {
    $steps.each(function() {
      var isOnScreen = isElementOnScreen($(this), ($(window).scrollTop() - 150));

      if (isOnScreen && !$(this).hasClass('is-visible')) {
        $(this).addClass('is-visible');
      }
    });

    var tryOnScreen = isElementOnScreen($tryGitlabEnterprise, ($(window).scrollTop() - 150));
    if (tryOnScreen && $stickyBanner.hasClass('active')) {
      $stickyBanner.removeClass('active');
    }
  });
});
