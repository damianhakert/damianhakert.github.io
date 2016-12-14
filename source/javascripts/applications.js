(function(){

  var scrollToElement = function(e, suggestion){
    var container = $('body'),
        scrollTo = $('h4:contains("'+suggestion+'")');

    container.animate({
        scrollTop: scrollTo.offset().top - container.offset().top + container.scrollTop() - 50
    });
  }

  var findMatches = function(searchQuery, apps){
    return apps.filter(function (app){
      var regex = new RegExp(searchQuery, 'gi');
      return app.match(regex);
    });
  }

  var displayMatches = function(){
    const matches = findMatches(this.searchContainer.val(), this.data.applicationTitles);
    
  }

  this.ApplicationSearchBar = (function(){
    function ApplicationSearchBar(){
      this.searchContainer = $('.search-apps');
      this.suggestions = $();
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

    ApplicationSearchBar.prototype.bindEvents = function(){
      this.searchContainer.bind('change', displayMatches.bind(this));
      this.searchContainer.bind('keyup', displayMatches.bind(this));
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

    return ApplicationSearchBar;

  })();

  new ApplicationSearchBar();

})();
