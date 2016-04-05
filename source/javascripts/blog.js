$(function () {
  $('.blog-entry table').each(function () {
    var $table = $(this),
        isHighlighted = $table.closest('.highlight');

    if (isHighlighted) {
      $table.addClass('highlighttable');
    }

    $(this).wrap('<div class="table-responsive"></div>');
  });
});
