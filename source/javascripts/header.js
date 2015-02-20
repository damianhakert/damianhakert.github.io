$(document).ready(function() {
  $('.navbar-default .navbar-nav').find('a[href="' + location.pathname + '"]').parents('li').addClass('active-state');

  // Toggles the mobile nav menu
  $(".navbar-toggle").click(function(event) {
    $(".navbar-collapse").toggle('in');
  });

});

