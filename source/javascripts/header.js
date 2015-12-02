function shiftWindow() {
  scrollBy(0, -85);
}

$(document).ready(function() {
  $('.navbar-default .navbar-nav').find('a[href="' + location.pathname + '"]').parents('li').addClass('active-state');

  // Toggles the mobile nav menu
  $(".navbar-toggle").click(function(event) {
    $(".navbar-collapse").toggle('in');
  });

  // Scroll the page up to prevent the sticky header from covering the content
  // being linked to via anchor
  if (location.hash) {
    setTimeout(shiftWindow, 100);
  }
  window.addEventListener('hashchange', shiftWindow)
});
