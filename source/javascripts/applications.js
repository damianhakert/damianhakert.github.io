(function(){

  var scrollToElement = function(e, suggestion){
    var container = $('body'),
        scrollTo = $('h4:contains("'+suggestion+'")');

    container.animate({
        scrollTop: scrollTo.offset().top - container.offset().top + container.scrollTop() - 50
    });
  }
  this.ApplicationSearchBar = (function(){
    function ApplicationSearchBar(){
      this.typeaheadSearch = $('.search-apps');
      this.initializeSearch();
      this.bindEvents();
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
      this.typeaheadSearch.bind('typeahead:select', scrollToElement);
    }

    ApplicationSearchBar.prototype.initializeSearch = function() {

      function startHound(){
        //The bloodhound engine
        this.applicationHound = new Bloodhound({
          datumTokenizer: Bloodhound.tokenizers.whitespace,
          queryTokenizer: Bloodhound.tokenizers.whitespace,
          local: this.data.applicationTitles
        });

        this.typeaheadSearch.typeahead({
          hint: true,
          highlight: true,
          minLength: 1
        },
        {
          name: 'Applications',
          source: this.applicationHound
        });
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
