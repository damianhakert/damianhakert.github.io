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
      $imageLink = $('.image-link');

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

    $(".dropdown-menu a").on('click', function (e) {
      e.preventDefault();

      var selText = $(this).text(),
          current = $(this).attr('href');

      $(this).parents('.btn-group').find('.dropdown-toggle').html(selText +' <span class="caret"></span>');

      $('.tab:not(' + current +')', $tabs).hide();
      $(current).show();
      window.location.replace(window.location.origin + window.location.pathname + current);

      $(this).dropdown('toggle');

      window.scrollTo(0, $('body').scrollTop() - 120);

      return false;
    });
  }

  if ($imageLink.length) {
    $imageLink.magnificPopup({
      type:'image'
    });
  }
});
