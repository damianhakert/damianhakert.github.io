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
});
