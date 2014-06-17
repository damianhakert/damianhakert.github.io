$(document).ready(function(){
  
  // Installation options
  $('#tabs .tab').hide();
  $('#tabs .tab:first').show();
  $(".dropdown-menu li a").click(function(){
    var selText = $(this).text();
    $(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
    
    current = $(this).attr('href');
    $('#tabs .tab').hide();
    $(current).show();

    // Close the dropdown
    $(this).dropdown('toggle');

    // Don't follow the link
    return false;
  });
});
