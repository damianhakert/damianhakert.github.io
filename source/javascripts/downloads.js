$(document).ready(function(){

  // Installation options
  $('#tabs .tab').hide();

  var current = window.location.hash;

  $(".dropdown-menu li a").click(function(){
    mixpanel.track("Clicked download dropdown");

    var selText = $(this).text();
    $(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');

    current = $(this).attr('href');
    $('#tabs .tab').hide();
    $(current).show();

    // Set the url
    window.location.replace(window.location.origin + window.location.pathname + current);

    // Close the dropdown
    $(this).dropdown('toggle');

    // Don't follow the link
    return false;
  });

  $(current).show();
});
