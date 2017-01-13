$(function () {
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
