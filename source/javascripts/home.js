$(function () {
  var $slider = $('#js-testimonials-slider');

  if ($slider.length) {
    $slider.slick({
      arrows: false,
      dots: true
    });
  }

  var $community = $('#js-landing-community');

  if ($community.length) {
    var count = 200;

    for (var i = 0; i < count; i++) {
      var $img = $('<img />', {
        src: 'http://placehold.it/100x100',
        class: 'community-image',
        style: 'display: none;'
      });
      $img.on('load', function () {
        $(this).fadeIn();
      });

      $community.append($img);
    }
  }
});
