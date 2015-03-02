$(document).ready(function() {
  $('.image-link').magnificPopup({
    type:'image'
  });

  // Event listener listening on row headings
  $('table.table tbody tr:first-child').on("click", toggleHeading);

  // Toggles row display
  function toggleHeading(e) {
    
    // Toggles show/hide class
    $(e.target).parent().siblings().toggleClass('hide');

    // Toggles chevrons
    if (!$(e.target).parent().siblings().hasClass('hide')) {
      $(e.target).parent().first().find('.fa').removeClass('fa-chevron-down').addClass('fa-chevron-up');
    } else {
      $(e.target).parent().first().find('.fa').removeClass('fa-chevron-up').addClass('fa-chevron-down');
    }
  }

});
