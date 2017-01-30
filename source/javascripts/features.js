(function () {
  this.SlickHandler = (function() {
    function SlickHandler(slickElement, slickNavElement, options) {
      var idSlickElement = slickElement[0].id;
      this.slickElement = slickElement;
      this.slickNavElement = slickNavElement;
      this.options = options;
      this.customDots = slickNavElement.find('.feature-slider-dot-content');
      this.slickElement.on('init reInit', this.bindEvents.bind(this));
      this.configSlickElement = {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true
            }
          }
        ]
      };

      this.configSlickNavElement = {
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '#' + idSlickElement,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
              swipe: true,
              autoplay: true,
              autoplaySpeed: 5000
            }
          }
        ]
      };

      this.slickElement.slick(this.configSlickElement);
      if (typeof this.slickNavElement !== 'undefined') {
        if (this.slickNavElement !== null) {
          this.slickNavElement.slick(this.configSlickNavElement);
        }
      }
      this.slickElement[0].slick.slickGoTo(0);
      if ($(window).width() > 768) {
        if (typeof this.options === 'undefined' || !this.options.isAlt) {
          $(this.customDots[0]).addClass('clicked-element');
        }
        else {
          $(this.customDots[0]).addClass('clicked-element-alt');
        }
      }

    }

    SlickHandler.prototype.bindEvents = function() {
      this.customDots.off('mouseenter').on('mouseenter', this.changePage.bind(this));
      this.slickElement.on("breakpoint", this.removeDesktopElements.bind(this));
      this.slickElement.on("swipe", this.syncSliders.bind(this));
      this.slickElement.on("destroy", this.reInitSliders.bind(this));
    };

    //Remove the clicked element styling in case a resize happens
    SlickHandler.prototype.removeDesktopElements = function(e, slick, breakpoint) {
      if (breakpoint <= 768) {
        this.customDots.removeClass('clicked-element');
        this.customDots.removeClass('clicked-element-alt');
      }
      else {
        this.slickElement.slick('unslick');
        this.slickNavElement.slick('unslick');
      }
    };

    SlickHandler.prototype.reInitSliders =  function() {
      this.slickElement.slick(this.configSlickElement);
      this.slickNavElement.slick(this.configNavElement);
    };

    SlickHandler.prototype.syncSliders = function(e, slick, direction) {
      if (slick.activeBreakpoint === 768 && slick.activeBreakpoint !== null) {
        this.slickNavElement[0].slick.slickGoTo(slick.currentSlide);
      }
      else {
        var newSelectedElement = $(this.slickNavElement).find('.feature-slider-dot-content');
        var clickedElementName = 'clicked-element';
        if (typeof this.options !== 'undefined') {
          clickedElementName = 'clicked-element-alt';
        }
        newSelectedElement.removeClass(clickedElementName);
        $(newSelectedElement).filter(function () {
          return $(this).attr('index') == slick.currentSlide;
        }).addClass(clickedElementName);
      }
    };

    SlickHandler.prototype.changePage = function(e) {
      var clickedElement = $(e.currentTarget);
      if (typeof this.options === 'undefined' || !this.options.isAlt) {
        this.customDots.removeClass('clicked-element');
        clickedElement.addClass('clicked-element');
      }
      else {
        this.customDots.removeClass('clicked-element-alt');
        clickedElement.addClass('clicked-element-alt');
      }
      this.slickElement[0].slick.slickGoTo(parseInt(clickedElement.attr("index")));
    };

    return SlickHandler;
  })();

  //this is prolly very silly
  var $slider = $('#feature-gallery-slider');
  var $sliderNavElement = $('.slider-nav');
  var $slider1 = $('#feature-gallery-slider-1');
  var $sliderNavElement1 = $('.slider-nav-1');
  var $slider2 = $('#feature-gallery-slider-2');
  var $sliderNavElement2 = $('.slider-nav-2');
  var $slider3 = $('#feature-gallery-slider-3');
  var $sliderNavElement3 = $('.slider-nav-3');
  var $slider4 = $('#feature-gallery-slider-4');
  var $sliderNavElement4 = $('.slider-nav-4');

  var slickHandler  = new SlickHandler($slider, $sliderNavElement, {
    isAlt: $slider.closest('.feature-gallery').hasClass('feature-gallery-alt')
  });
  var slickHandler1 = new SlickHandler($slider1, $sliderNavElement1, {
    isAlt: $slider1.closest('.feature-gallery').hasClass('feature-gallery-alt')
  });
  if ($slider2.length) {
    var slickHandler2 = new SlickHandler($slider2, $sliderNavElement2);
  }
  if ($slider3.length) {
    var slickHandler3 = new SlickHandler($slider3, $sliderNavElement3, {isAlt: true});
  }
  if ($slider4.length) {
    var slickHandler4 = new SlickHandler($slider4, $sliderNavElement4);
  }

  var $videoButton = $(".video-button");
  var $videoContainer = $('.video-container');

  $videoButton.on('click', function (e) {
    e.preventDefault();
    $videoButton.hide();
    $videoContainer.show();
  });
})();
