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
    var cutoff = Math.floor(($community.height() / 100) * 40),
        imgsRowCount = 6,
        rowCount = 0,
        imgSize = 55,
        windowWidth = $(window).width();

    if (windowWidth >= 1200) {
      cutoff = Math.floor(($community.height() / 100) * 75)
      imgsRowCount = 20;
      imgSize = 60;
    } else if (windowWidth >= 990) {
      cutoff = Math.floor(($community.height() / 100) * 55)
      imgsRowCount = 10;
      imgSize = 99;
    } else if (windowWidth >= 768) {
      cutoff = Math.floor(($community.height() / 100) * 40)
      imgsRowCount = 8;
      imgSize = 96;
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
