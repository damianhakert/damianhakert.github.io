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

  function equilize() {
    $('[data-equal]').each(function(){
      var $this = $(this),
      target = $this.data('equal');

      if ($(window).width() >= 992) {
        $this.find(target).css('height', '').equalHeights();
      } else {
        $this.find(target).css('height', '');
      }
    });
  }

  setTimeout(equilize, 500);
  $(window).on('resize', equilize);

  $('.featured-item-expand').on('click', function(e) {
    var listExpander = $(this);
        targetFeatureList = $($(this).attr('href'));

    if (!targetFeatureList.is(':visible')) {
      targetFeatureList.addClass('list-expanded');
      listExpander.addClass('chevron-up');
    } else {
      targetFeatureList.removeClass('list-expanded');
      listExpander.removeClass('chevron-up');
    }
    
    e.preventDefault();
  });

  $('.js-faq-question').on('click', function (e) {
    e.preventDefault();
    isOpen = $(this).closest('.faq-item').is('.is-open');
    $('.faq-item.is-open').removeClass('is-open');

    if (!isOpen) {
      $(this).closest('.faq-item').toggleClass('is-open');
    }
  });
});
