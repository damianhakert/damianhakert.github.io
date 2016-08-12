function getUrlParameter(sParam) {
  var sPageURL = window.location.search.substring(1);
  var sURLVariables = sPageURL.split('&');
  for (var i = 0; i < sURLVariables.length; i++) {
    var sParameterName = sURLVariables[i].split('=');
    if (sParameterName[0] == sParam) {
      return sParameterName[1];
    }
  }
}

$(function() {
  var $ci = $('#ci-subt'),
      $tagLine = $('#tagline'),
      $hireUs = $('#hire-us'),
      $tabs = $('#tabs'),
      $imageLink = $('.image-link'),
      $tables = $('table'),
      internalNavigationEvent = 'onpopstate' in window ? 'popstate' : 'hashchange';

  $("input").not("[type=submit]").jqBootstrapValidation();

  if (getUrlParameter('s') == 'ph' && $ci.length) {
    $ci.append('<br><br>Hello, Product Hunters!<br><br> Get 75% off a GitLab.com bronze subscription forever! <br> Use the code: producthunt75');
  }

  // Consultancy
  if ($tagLine.length && $hireUs.length) {
    $tagLine.addClass('animated fadeInLeft');
    $hireUs.addClass('animated bounceIn');
  }

  // Tabs
  if ($tabs.length) {
    var current = window.location.hash;

    $('.tab:not(' + current +')', $tabs).hide();
    window.scrollTo(0, 0);

    $(".dropdown-menu a").on('click', function (e) {
      e.preventDefault();

      var selText = $(this).text(),
          current = $(this).attr('href');

      $(this).parents('.btn-group').find('.dropdown-toggle').html(selText +' <span class="caret"></span>');

      $('.tab:not(' + current +')', $tabs).hide();
      $(current).show();
      window.location.replace(window.location.origin + window.location.pathname + current);
      window.scrollTo(0, 0);

      $(this).dropdown('toggle');

      return false;
    });
  }

  if ($imageLink.length) {
    $imageLink.magnificPopup({
      type:'image'
    });
  }

  if ($tables.length) {
    $tables.each(function () {
      var $table = $(this);

      $(this).wrap('<div class="table-responsive"></div>');
    });
  }

  var changeScrollPosition = function () {
    if (window.location.hash === '' || window.location.hash.indexOf('#stq=') === 0) { return; }

    var hash = window.location.hash,
        $el = $('a[name="' + hash.replace('#', '') + '"], ' + hash + ''),
        extraHeight = $('.navbar-header').outerHeight(),
        $qnav = $('#qnav');

    if ($qnav.length) {
      extraHeight += $qnav.outerHeight() - 2;
    }

    if ($el.length) {
      $(window).scrollTop($el.offset().top - extraHeight);
    }
  }

  $(window).on('load ' + internalNavigationEvent, function () {
    setTimeout(changeScrollPosition, 10);
  });

  // Search
  var $search = $('.js-search'),
      $searchIcon = $('.js-search-icon');

  $('.js-search-icon').on('click', function () {
    $searchIcon.parent().addClass('is-open is-focused');

    setTimeout(function () {
      $search.focus();
    }, 350);
  })

  $search.on('keyup', function (e) {
    if (e.which === 13) {
      // Trigger a search by changing hash
      window.location.hash = '#stq=' + $(this).val()
    }
  }).on('focus', function () {
    $(this).parent().addClass('is-focused');
  }).on('blur', function () {
    $(this).parent().removeClass('is-focused');
  });;

  // Sticky dev cycle nav

  $(".cycle-icon-row").removeClass('stuck');
  $(document).scroll(function(){
    navHeight = $('.navbar-fixed-top').height();
    devCycleNavHeight = $('.cycle-icon-row').height();
    $iconNav = $('.cycle-icon-row');
    scroll = $(window).scrollTop();

    if ($iconNav.is(':visible')) {

      if (scroll > 0) {
        $iconNav.removeClass('stuck');
      }

      if (scroll >= $iconNav.offset().top - navHeight) {
        $iconNav.addClass('stuck');
      }

      if (scroll >= $('.idea-to-production').offset().top) {
        $iconNav.removeClass('stuck');
      }

      var $currentSection;
      $('.cycle-vertical .step').each(function() {
        var divPosition = $(this).offset().top - navHeight - (devCycleNavHeight * 2.3);
        $('.cycle-icon-row .step').removeClass('active');

        if( divPosition - 1 < scroll ){
          $currentSection = $(this);
        }

        if ($currentSection) {
          var id = $currentSection.attr("id");
          $('.cycle-icon-row .step').removeClass('active');
          $("[href='#" + id + "']").addClass('active');
        }
      })
    }
  });

});
