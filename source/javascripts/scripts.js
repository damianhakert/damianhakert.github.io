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
      $blogTables = $('.blog-entry table');

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

  if ($blogTables.length) {
    $blogTables.each(function () {
      var $table = $(this),
          isHighlighted = $table.closest('.highlight');

      if (isHighlighted) {
        $table.addClass('highlighttable');
      }

      $(this).wrap('<div class="table-responsive"></div>');
    });
  }

  var changeScrollPosition = function () {
    var hash = window.location.hash,
        $el = $('a[name="' + hash.replace('#', '') + '"], ' + hash + ''),
        extraHeight = $('.navbar-header').outerHeight(),
        $qnav = $('#qnav');

    if ($qnav.length) {
      extraHeight += $qnav.outerHeight();
    }

    if ($el.length) {
      $(window).scrollTop($el.offset().top - extraHeight);
    }
  }

  $(window).on("hashchange", changeScrollPosition);
});

$(window).on('load', function () {
  setTimeout(function() {
    if (window.location.hash !== '') {
      var target = $('a[name="' + window.location.hash.replace('#', '') + '"]'),
          extraHeight = $('.navbar-header').outerHeight();

      if (target.length) {
        $(window).scrollTop(target.offset().top - extraHeight);
      }
    }
  }, 10);
});
