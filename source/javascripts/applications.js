(function($){

  const MAX_RESULTS = 5;

  var filterDuplicatesArray = function(array) {
    var seen = {};
    var out = [];
    var j = 0;
    for(var i = 0; i < array.length; i++) {
      var item = array[i];
       if(seen[item] !== 1) {
         seen[item] = 1;
         out[j++] = item;
       }
    }
    return out;
  }

  var scrollToElement = function() {
    var container = $('html, body');
        scrollTo = $('h4:icontains("'+this.searchContainer.val()+'")');
    container.animate({
        scrollTop: scrollTo.offset().top - container.offset().top + container.scrollTop() - 180
    });
    this.suggestions.empty();
    this.searchContainer.blur();
  }

  var findMatches = function(searchQuery, apps) {
    return apps.filter(function (app){
      var regex = new RegExp(searchQuery, 'gi');
      return app.match(regex);
    });
  }

  var showAllApps = function() {
    this.appListDOM.each(function() {
      $(this).show();
      $(this).next('.row').each(function () {
        $(this).show();
      });
      $(this).next('.row').find('h4').each(function() {
        $(this).closest('.col-md-4').show();
      });
      $(this).prev('hr').show();
    });
  }

  var showAppsAccordingToSearch = function(searchQuery) {
    var regex = new RegExp(searchQuery, 'gi');
    var allAppsHidden = true;
    this.appListDOM.each(function () {
      var appsInCategory = $(this).next('.row').find('h4');
      var appCategoryRows = $(this).next('.row');
      var categorySeparator = $(this).prev('hr');
      var hideCategoryTitle = true;
      appsInCategory.each(function() {
        if($(this).text().match(regex)) {
          hideCategoryTitle = false;
          allAppsHidden = false;
          $(this).closest('.col-md-4').show();
        } else {
          $(this).closest('.col-md-4').hide();
        }
      });
      if(hideCategoryTitle) {
        $(this).hide();
        categorySeparator.hide();
        appCategoryRows.each(function() {
          $(this).hide();
        });
      }
    });
    if(allAppsHidden) {
      showAllApps.call(this);
    }
  }

  var populateList = function(searchQuery, apps) {
    var matches = findMatches(searchQuery, apps);
    matches = matches.length > MAX_RESULTS ? matches.slice(0, MAX_RESULTS) : matches;
    var html = matches.map(function (app){
      var regex = new RegExp(searchQuery, 'gi');
      var application = app.replace(regex, '<span class="hl">'+searchQuery+'</span>');
      return '<li>'+application+'</li>'
    }).join('');
    this.suggestions.html(html);
    this.suggestionsListElements = $('.suggestions li');
    this.suggestionsListElements.on('click touchstart', function(e) {
      e.stopPropagation();
      var target = $(e.target);
      this.searchContainer.val(target.text());
      this.suggestions.empty();
      showAppsAccordingToSearch.call(this, this.searchContainer.val());
      scrollToElement.call(this);
    }.bind(this));
  }

  var displayMatches = function(e) {
    e.preventDefault();
    if(e.type === 'keyup') {
      if(e.keyCode === 38 || e.keyCode === 40) {
        var selectedSuggestion = $(this.suggestions).find('.selected-suggestion');
        if(!selectedSuggestion.length) {
          if(e.keyCode === 40) {
            var nextEl = $(this.suggestionsListElements)[0];
            $(nextEl).addClass('selected-suggestion');
          }
        }
        else {
          selectedSuggestion.removeClass('selected-suggestion');
          if(e.keyCode === 40) {
            var nextEl = selectedSuggestion.next();
            if (!nextEl.length) {
              nextEl = $(this.suggestionsListElements)[0];
            }
            $(nextEl).addClass('selected-suggestion');
          } else { //keydown
            var prev = selectedSuggestion.prev();
            if (!prev.length) {
              prev = $(this.suggestionsListElements).last();
            }
            prev.addClass('selected-suggestion');
          }
        }
      } else if(e.keyCode === 13) {
        if(this.searchContainer.val() === '') {
          showAllApps.call(this);
        }
        else {
          this.searchContainer.val($('.selected-suggestion').text());
          // Filter all of the apps
          showAppsAccordingToSearch.call(this, this.searchContainer.val());
          scrollToElement.call(this);
        }
      } else if (e.keyCode === 27) {
        this.suggestions.empty();
      } else if(e.keyCode === 8 || e.keyCode === 46) {
        if(this.searchContainer.val() === '') {
          this.searchIcon.show();
          this.resetIcon.hide();
          showAllApps.call(this);
          this.suggestions.empty();
        }
      } else {
        if(this.searchContainer.val() !== '') {
          populateList.call(this, this.searchContainer.val(), this.applicationTitles);
          showAppsAccordingToSearch.call(this, this.searchContainer.val());
          this.searchIcon.hide();
          this.resetIcon.show();
        } else {
          this.suggestions.empty();
        }
      }
    } else if(e.type === 'focus' && this.searchContainer.val() !== '') {
      populateList.call(this, this.searchContainer.val(), this.applicationTitles);
      this.searchIcon.hide();
      this.resetIcon.show();
    }
  }

  this.ApplicationSearchBar = (function() {
    function ApplicationSearchBar(){
      this.searchContainer = $('.search-apps');
      this.suggestions = $('.suggestions');
      this.suggestionsListElements = $('.suggestions li');
      this.searchIcon = $('.search');
      this.resetIcon = $('.reset');
      this.resetIcon.hide();
      this.appListDOM = $('.app-list').find('h2');
      var applicationTitles = [];
      $('.app-list').find('h4').each(function() {
        applicationTitles.push($(this).text().trim());
      });
      this.applicationTitles = filterDuplicatesArray(applicationTitles);
      this.bindEvents();
    }

    ApplicationSearchBar.prototype.bindEvents = function() {
      this.searchContainer.on('change', displayMatches.bind(this));
      this.searchContainer.on('keyup', displayMatches.bind(this));
      $('body').on('click', this.resetSearch.bind(this));
      this.searchContainer.on('focus', displayMatches.bind(this));
      this.resetIcon.on('click touchstart', this.resetSearch.bind(this));
    }

    ApplicationSearchBar.prototype.resetSearch = function(e) {
      var $target = $(e.target);
      if(!$target.hasClass('search-apps')) {
        this.suggestions.empty();
      }
      if($target.hasClass('reset')) {
        this.searchContainer.val('');
        this.searchIcon.show();
        this.resetIcon.hide();
        showAllApps.call(this);
      }
    }

    jQuery.expr[':'].icontains = function(a, i, m) {
      return jQuery(a).text().toLowerCase()
        .indexOf(m[3].toLowerCase()) >= 0;
    };

    return ApplicationSearchBar;

  })();

  new ApplicationSearchBar();

})(jQuery);
