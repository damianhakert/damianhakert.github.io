(function(){

  if (!Array.prototype.filter) {
    Array.prototype.filter = function(fun/*, thisArg*/) {
      'use strict';

      if (this === void 0 || this === null) {
        throw new TypeError();
      }

      var t = Object(this);
      var len = t.length >>> 0;
      if (typeof fun !== 'function') {
        throw new TypeError();
      }

      var res = [];
      var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
      for (var i = 0; i < len; i++) {
        if (i in t) {
          var val = t[i];

          if (fun.call(thisArg, val, i, t)) {
            res.push(val);
          }
        }
      }

      return res;
    };
  }

  function uniq_fast(a) {
      var seen = {};
      var out = [];
      var len = a.length;
      var j = 0;
      for(var i = 0; i < len; i++) {
           var item = a[i];
           if(seen[item] !== 1) {
                 seen[item] = 1;
                 out[j++] = item;
           }
      }
      return out;
  }

  var setDropdown = function(event){
    var $selected = $(event.currentTarget);

    var newTitle = $selected.find('.value').text();
    var $title = $selected.parents('.dropdown').find('.dropdown-title');

    $title.text(newTitle);
  }

  var filterEvents = function(el){
    if(this.location !== 'Event Location'
       && this.type !== 'Event Type'
       && this.topic !== 'Event Topic'){
      if(this.location === el.location
        && this.type === el.type
        && this.topic === el.topic){
        return true;
      }
      else{
        return false;
      }
    } else if(this.location === 'Event Location'
              && this.type !== 'Event Type'
              && this.topic !== 'Event Topic'){
      if(this.type === el.type && this.topic === el.topic){
        return true;
      }
      else{
        return false;
      }
    } else if(this.location !== 'Event Location'
              && this.type === 'Event Type'
              && this.topic !== 'Event Topic'){
      if(this.location === el.location && this.topic === el.topic){
        return true;
      }
      else{
        return false;
      }
    } else if(this.location !== 'Event Location'
              && this.type !== 'Event Type'
              && this.topic === 'Event Topic'){
        if(this.location === el.location && this.type === el.type){
          return true;
        }
        else{
          return false;
        }
    } else if(this.location !== 'Event Location'
              && this.type === 'Event Type'
              && this.topic === 'Event Topic'){
        if(this.location === el.location){
          return true;
        }
        else{
          return false;
        }
    } else if(this.location === 'Event Location'
              && this.type !== 'Event Type'
              && this.topic === 'Event Topic'){
        if(this.type === el.type){
          return true;
        }
        else{
          return false;
        }
    } else if(this.location === 'Event Location'
              && this.type === 'Event Type'
              && this.topic !== 'Event Topic'){
        if(this.topic === el.topic){
          return true;
        }
        else{
          return false;
        }
    }
    else{
      return false;
    }
  }

  this.EventsHandler = (function(){
    function EventsHandler(){
      this.render();
    }

    EventsHandler.prototype.bindEvents = function(){
      var $eventTypeDropdown = $('#event-types li');
      var $eventTopicDropdown = $('#event-topics li');
      var $eventLocationDropdown = $('#event-location li');

      //Set selected dropdown value
      $eventTypeDropdown.on('click', setDropdown);
      $eventTopicDropdown.on('click', setDropdown);
      $eventLocationDropdown.on('click', setDropdown);

      //Render the filtered content
      $eventTypeDropdown.on('click', this.render.bind(this));
      $eventTopicDropdown.on('click', this.render.bind(this));
      $eventLocationDropdown.on('click', this.render.bind(this));

    }

    //Render functions
    EventsHandler.prototype.getData = function() {
      var deferred = jQuery.Deferred();

      $.get('/events/data.json').then(function(data){
        this.data = data;
        deferred.resolve();
      }.bind(this));

      return deferred.promise();
    }

    EventsHandler.prototype.renderEventList = function(options){
      console.log('options: ', options);
      var $eventsList = $('.event-list');
      var eventsToPopulate = typeof options !== 'undefined' ? options.filteredData : this.data.events;
      if(typeof options !== 'undefined'){
        $eventsList.innerHTML.detach();
      }
      //The template for the event list
      var $templateEventListElement = $('#events-list-template').html();
      $templateEventListElement = $($templateEventListElement);
      var eventListArray = [];
      var eventTypesArray = [];
      var eventTopicsArray = [];
      var eventLocationArray = [];
      //Create the event list
      eventsToPopulate.forEach(function(element){
        var $tempTemplate = $templateEventListElement.clone()
        $($tempTemplate).find('.event-topic').text(element.topic);
        $($tempTemplate).find('.event-date').text(element.date);
        $($tempTemplate).find('.event-type').text(element.type);
        $($tempTemplate).find('.event-location').text(element.location);
        $($tempTemplate).find('.event-description').text(element.description);
        //Separate the social tags
        var socialTags = element.social_tags.trim().split(',');
        socialTags.forEach(function(tag){
          $($tempTemplate).find('.social-tags').append('<span class="social-tag">#'+tag+'</span>');
        });
        eventListArray.push($tempTemplate);
      });
      $eventsList.append(eventListArray);

      if(typeof options === 'undefined'){
        //Populate the dropdowns
        this.populateDropdowns();
      }

    }

    EventsHandler.prototype.render = function() {
      function renderData(shouldWeFilter){

        if(shouldWeFilter){
          this.filterTest();
        }
        else{
          this.renderEventList();
        }
      }

      if(this.data){
        renderData.call(this, true);
      } else {
        $.when(this.getData()).then(function(){
          renderData.call(this);
        }.bind(this));
      }
    }

    EventsHandler.prototype.populateDropdowns = function() {
      var eventTypesDisplayArray = [];
      var eventTopicsDisplayArray = [];
      var eventLocationDisplayArray = [];
      //Populate the dropdowns
      var $eventTypeDropdown = $('#event-types ul');
      var $eventTopicDropdown = $('#event-topics ul');
      var $eventLocationDropdown = $('#event-location ul');
      //The template for the dropdown list
      var $templateEventListDropdownElement = $('#events-dropdowns-template').html();
      $templateEventListDropdownElement = $($templateEventListDropdownElement);
      var eventTypes = this.data.events.map(function(el){
        return el.type;
      });
      eventTypes = uniq_fast(eventTypes);
      var eventTopics = this.data.events.map(function(el){
        return el.topic;
      });
      eventTopics = uniq_fast(eventTopics);
      var eventLocations = this.data.events.map(function(el){
        return el.location;
      });
      eventLocations = uniq_fast(eventLocations);
      eventTypes.forEach(function(type){
        var $tempDropdownEl = $templateEventListDropdownElement.clone();
        $($tempDropdownEl).append('<span class="value">'+type+'</span>');
        eventTypesDisplayArray.push($tempDropdownEl)
      });
      eventTopics.forEach(function(topic){
        var $tempDropdownEl = $templateEventListDropdownElement.clone();
        $($tempDropdownEl).append('<span class="value">'+topic+'</span>');
        eventTopicsDisplayArray.push($tempDropdownEl)
      });
      eventLocations.forEach(function(location){
        var $tempDropdownEl = $templateEventListDropdownElement.clone();
        $($tempDropdownEl).append('<span class="value">'+location+'</span>');
        eventLocationDisplayArray.push($tempDropdownEl)
      });
      $eventTypeDropdown.append(eventTypesDisplayArray);
      $eventTopicDropdown.append(eventTopicsDisplayArray);
      $eventLocationDropdown.append(eventLocationDisplayArray);
      //Set title to the first element of the array
      $('#event-types .dropdown-title').text('Event Type');
      $('#event-location .dropdown-title').text('Event Location');
      $('#event-topics .dropdown-title').text('Event Topic');
      this.bindEvents();
    }

    EventsHandler.prototype.filterTest = function(){
      var filters = this.getFilterValues();
      var filteredData = this.data.events.filter(filterEvents,filters);
      this.renderEventList({renderFilteredData: true, filteredData: filteredData});
    }

    EventsHandler.prototype.getFilterValues = function(){
      return {
        type: $('#event-types').find('.dropdown-title').text() || '',
        topic: $('#event-topics').find('.dropdown-title').text() || '',
        location: $('#event-location').find('.dropdown-title').text() || ''
      };
    }

    return EventsHandler;
  })();

  new EventsHandler();
})();
