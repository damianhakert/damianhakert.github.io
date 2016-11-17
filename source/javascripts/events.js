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

  var setDropdown = function(event){
    var $selected = $(event.currentTarget);

    var newTitle = $selected.find('.value').text();
    var $title = $selected.parents('.dropdown').find('.dropdown-title');

    $title.text(newTitle);
  }

  var filterEvents = function(el){
    if(el.location !== 'undefined' && el.location !== 'Event Location'){
      if(this.location === el.location){
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

    EventsHandler.prototype.renderEventList = function(){
      var $eventsList = $('.event-list');
      $eventsList.detach();
      //Populate the dropdowns
      var $eventTypeDropdown = $('#event-types ul');
      var $eventTopicDropdown = $('#event-topics ul');
      var $eventLocationDropdown = $('#event-location ul');
      //The template for the event list
      var $templateEventListElement = $('#events-list-template').html();
      $templateEventListElement = $($templateEventListElement);
      //The template for the dropdown list
      var $templateEventListDropdownElement = $('#events-dropdowns-template').html();
      $templateEventListDropdownElement = $($templateEventListDropdownElement);
      var eventListArray = [];
      var eventTypesArray = [];
      var eventTopicsArray = [];
      var eventLocationArray = [];
      //Create the event list
      this.data.events.forEach(function(element){
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
        //Dropdowns, gotta make sure to have only one element and not all included
        var $tempDropdownEl = $templateEventListDropdownElement.clone();
        $($tempDropdownEl).append('<span class="value">'+element.type+'</span>');
        eventTypesArray.push($tempDropdownEl)
        var $tempDropdownEl1 = $templateEventListDropdownElement.clone();
        $($tempDropdownEl1).append('<span class="value">'+element.topic+'</span>');
        eventTopicsArray.push($tempDropdownEl1)
        var $tempDropdownEl2 = $templateEventListDropdownElement.clone();
        $($tempDropdownEl2).append('<span class="value">'+element.location+'</span>');
        eventLocationArray.push($tempDropdownEl2)
      });
      $eventsList.append(eventListArray);
      $eventTypeDropdown.append(eventTypesArray);
      $eventTopicDropdown.append(eventTopicsArray);
      $eventLocationDropdown.append(eventLocationArray);
      //Set title to the first element of the array
      $('#event-types .dropdown-title').text('Event Type');
      $('#event-location .dropdown-title').text('Event Location');
      $('#event-topics .dropdown-title').text('Event Topic');
      this.bindEvents();
    }

    EventsHandler.prototype.render = function() {
      var input = this.getFilterValues();

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

    EventsHandler.prototype.filterTest = function(){
      var filters = this.getFilterValues();
      var filteredData = this.data.events.filter(filterEvents,filters);
    }

    EventsHandler.prototype.getFilterValues = function(){
      return {
        type: $('#event-types').find('.dropdown-title').text(),
        topic: $('#event-topics').find('.dropdown-title').text(),
        location: $('#event-location').find('.dropdown-title').text()
      };
    }

    return EventsHandler;
  })();

  new EventsHandler();
})();
