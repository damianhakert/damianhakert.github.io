$(function () {
  $(window).on("hashchange", function () {
    window.scrollTo(window.scrollX, window.scrollY - 85);
  });
});
