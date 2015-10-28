$(document).ready(function() {

  var current = window.location.hash;
  $(current).addClass('flipped');

  $('.biolink').click(function() {
    $('.card').removeClass('flipped');

    $(this).parent().parent().addClass('flipped');

    return false;
  });

  $('.flipback').click(function(){
    $('.card').removeClass('flipped');
    return false;
  });
});
