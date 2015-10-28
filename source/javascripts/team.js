$(document).ready(function() {

  var current = window.location.hash;
  $(current).addClass('flipped');

  $('.biolink').click(function() {
    $('.card').removeClass('flipped');

    current = $(this).attr('href');
    window.location.replace(window.location.origin + window.location.pathname + current);

    $(current).addClass('flipped');

    return false;
  });

  $('.flipback').click(function(){
    $('.card').removeClass('flipped');
    return false;
  });
});
