$.fn.wrapInTag = function(opts) {
  var tag = opts.tag || 'span'
    , words = opts.words || []
    , regex = RegExp('\\b(' + words.join('|') + ')\\b', 'gi')
    , replacement = '<'+ tag +' class="$&">$&</'+ tag +'>';

  return this.html(function() {
    return $(this).text().replace(regex, replacement);
  });
};

$(function() {
  return $("h2, h3").each(function(i, el) {
    // Badges
    $(el).wrapInTag({
      tag: 'span',
      words: ['ce', 'ee', 'ees' , 'eep']
    });
    // Anchors
    var $el, icon, id;
    $el = $(el);
    id = $el.attr('id');
    icon = '<i class="fa fa-link"></i>';
    if (id) {
      return $el.prepend($("<a />").addClass("header-link").attr("href", "#" + id).html(icon));
    }
  });
});
