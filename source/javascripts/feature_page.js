$(document).ready(function() {
  // Hide all rows but not row headings
  $('table.table tbody tr:not(:first-child)').addClass('hide');
  
  // Display first row heading and its rows
  $('.first').children().removeClass('hide');

  $('.image-link').magnificPopup({
    type:'image'
  });

  // Event listener listening on row headings
  $('table.table tbody tr:first-child').on("click", toggleHeading);

  // Toggles row display
  function toggleHeading(e) {
    $(e.target).parent().siblings().toggleClass('hide');
  }

});
