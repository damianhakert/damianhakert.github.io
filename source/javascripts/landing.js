$(document).ready(function() {
  var win = $(window);
  var allLogos = $(".logos-inner");
  var allTestimonials = $('.testimonials');
  var allWhatColumns = $('.what-column');

  allLogos.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("already-visible"); 
    } 
  });

  allTestimonials.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("already-visible"); 
    } 
  });

  allWhatColumns.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("already-visible"); 
    } 
  });  

  win.scroll(function(event) {
    allLogos.each(function(i, el) {
      var el = $(el);
      if (el.visible(true)) {
        el.addClass("come-in"); 
      } 
    });

    allTestimonials.each(function(i, el) {
      var el = $(el);
      if (el.visible(true)) {
        el.addClass("come-in"); 
      } 
    });

    allWhatColumns.each(function(i, el) {
      var el = $(el);
      if (el.visible(true)) {
        el.addClass("come-in"); 
      } 
    });
  });
});