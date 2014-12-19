$(document).ready(function() {
  $('.image-link').magnificPopup({
    type:'image'
  });

  if ($('.qnav').is('#qnav')) {
    var nav = $('.qnav');
    $(window).scroll(function() {
      var scroll = nav.offset().top - $(window).scrollTop();
      if (scroll <= 50) {
        nav.addClass("qnav2", 500);
      }
      if ($(window).scrollTop() <= 500) {
        nav.removeClass("qnav2");
      }
    });
  }
});
