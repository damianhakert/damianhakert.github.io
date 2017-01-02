(function($){

  const MAX_RESULTS = 5;

  var scrollToElement = function() {
    var container = $('html, body');
        scrollTo = $('h4:icontains("'+this.searchContainer.val()+'")');
    container.animate({
        scrollTop: scrollTo.offset().top - container.offset().top + container.scrollTop() - 180
    });
    this.suggestions.html('');
    this.searchContainer.blur();
  }

  var findMatches = function(searchQuery, apps) {
    return apps.filter(function (app){
      var regex = new RegExp(searchQuery, 'gi');
      return app.match(regex);
    });
  }

  var showAllApps = function() {
    this.appListDOM.each(function () {
      $(this).parent().parent().show();
    });
  }

  var showAppsAccordingToSearch = function(searchQuery) {
    var regex = new RegExp(searchQuery, 'gi');
    this.appListDOM.each(function () {
      if($(this).text().match(regex)) {
        $(this).parent().parent().show();
      } else {
        $(this).parent().parent().hide();
      }
    });
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
    this.suggestionsListElements.off('click touchstart').on('click touchstart', function(e) {
      var target = $(e.target);
      this.searchContainer.val(target.text());
      this.suggestions.html('');
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

      } else if(e.keyCode === 8) {
        if(this.searchContainer.val() === '') {
          showAllApps.call(this);
        }
      } else {
        if(this.searchContainer.val() !== '') {
          populateList.call(this, this.searchContainer.val(), this.data.applicationTitles);
          showAppsAccordingToSearch.call(this, this.searchContainer.val());
          this.searchIcon.hide();
          this.resetIcon.show();
        } else {
          this.suggestions.html('');
        }
      }
    } else if(e.type === 'focus' && this.searchContainer.val() !== '') {
      populateList.call(this, this.searchContainer.val(), this.data.applicationTitles);
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
      this.appListDOM = $('.app-list').find('h4');
      this.initializeSearch();
    }

    ApplicationSearchBar.prototype.getData = function() {
      var deferred = jQuery.Deferred();

      $.get('/applications/data.json').then(function(data) {
        this.data = data;
        deferred.resolve();
      }.bind(this));

      return deferred.promise();
    }

    ApplicationSearchBar.prototype.bindEvents = function() {
      this.searchContainer.bind('change', displayMatches.bind(this));
      this.searchContainer.bind('keyup', displayMatches.bind(this));
      this.searchContainer.bind('blur', this.resetSearch.bind(this));
      this.searchContainer.bind('focus', displayMatches.bind(this));
      this.resetIcon.bind('click touchstart', this.resetSearch.bind(this));
    }

    ApplicationSearchBar.prototype.resetSearch = function(e) {
      var $target = $(e.target);
      this.suggestions.html('');
      if($target.hasClass('reset')) {
        this.searchContainer.val('');
        this.searchIcon.show();
        this.resetIcon.hide();
        showAllApps.call(this);
      }
    }

    ApplicationSearchBar.prototype.initializeSearch = function() {

      function startHound(){
        this.bindEvents();
      }

      if(this.data) {
        startHound.call(this);
      } else {
        $.when(this.getData()).then(function() {
          startHound.call(this);
        }.bind(this));
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
