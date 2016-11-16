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
      autoplay: true,
      autoplaySpeed: 5000,
      dots: true
    });
  }

  var $community = $('#js-landing-community');

  if ($community.length) {
    var cutoff = $community.height(),
        imgsRowCount = 8,
        rowCount = 0,
        imgSize = 96,
        windowWidth = $(window).width();

    if (windowWidth >= 1200) {
      imgsRowCount = 20;
      imgSize = 60;
    } else if (windowWidth >= 768) {
      imgsRowCount = 16;
      imgSize = 75;
    }

    rowCount = Math.ceil(cutoff / imgSize);
    imgsCount = rowCount * imgsRowCount;

    // Get JSON
    $.getJSON('team.json', function (d) {
      var team = shuffle(d.concat(d.concat(d)));

      var html = []
      $.each(team, function (i) {
        if (i < imgsCount) {
          var $img = $('<img />', {
            src: this.picture
          });
          $img.on('load', function () {
            var $this = $(this);
            setTimeout(function () {
              $this.addClass('is-loaded');
            }, 1000);
          });

          html.push($('<div class="community-image">').append($img));
        }
      });

      $community.append(html);
    });
  }
});
