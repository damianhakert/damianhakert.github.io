$(document).ready(function() {
  $('.image-link').magnificPopup({
    type:'image'
  });

  if ($('.qnav').is('#qnav')) {
    var nav = $('.qnav');
    $(window).scroll(function() {
      var scroll = nav.offset().top - $(window).scrollTop();
      console.log(scroll);
      console.log($(window).scrollTop());
      if (scroll <= 50) {
        nav.addClass("qfix");
      }
      if ($(window).scrollTop() <= 500) {
        nav.removeClass("qfix");
      }
    });
  }
});
