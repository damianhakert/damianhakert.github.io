$(document).ready(function() {
  $('.navbar-default .navbar-nav').find('a[href="' + location.pathname + '"]').parents('li').addClass('active-state');
});
