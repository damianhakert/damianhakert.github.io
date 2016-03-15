function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

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
    // Get JSON
    $.getJSON('team.json', function (d) {
      var team = shuffle(d.concat(d.concat(d)));

      $.each(team, function () {
        var $img = $('<img />', {
          src: 'images/team/' + this.picture
        });
        $img.on('load', function () {
          var $this = $(this);
          setTimeout(function () {
            $this.addClass('is-loaded');
          }, 1000);
        });

        $community.append($('<div class="community-image">').append($img));
      });
    });
  }
});
