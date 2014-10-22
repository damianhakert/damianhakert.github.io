$(document).ready(function() {
  $('.image-link').magnificPopup({
    type:'image'
  });

  var nav = $('.qnav');
  $(window).scroll(function() {
    var scroll = nav.offset().top - $(window).scrollTop();
    if (scroll <= 50) {
      nav.addClass("qfix");
    }
    if ($(window).scrollTop() <= 690) {
      nav.removeClass("qfix");
    }
  });
});
