(function(){
  function filterDuplicatesArray(a) {
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

  var getItems = function(total, page){
    var items = [];
    if (page > 1) items.push({ title: '<< First', where: 1 });
    if (page > 1) {
      items.push({ title: 'Prev', where: page - 1 });
    } else {
      items.push({ title: 'Prev', where: page - 1, disabled: true });
    }
    if (page > 6) items.push({ title: '...', separator: true });

    const start = Math.max(page - 4, 1);
    const end = Math.min(page + 4, total);

    for (var i = start; i <= end; i++) {
      const isActive = i === page;
      items.push({ title: i, active: isActive, where: i });
    }

    if (total - page > 4) items.push({ title: '...', separator: true });

    if (page === total) {
      items.push({ title: 'Next', where: page + 1, disabled: true });
    } else if (total - page >= 1) {
      items.push({ title: 'Next', where: page + 1 });
    }

    if (total - page >= 1) items.push({ title: 'Last ', where: total });

    return items;
  }

  var setDropdown = function(event) {
    var $selected = $(event.currentTarget);

    var newTitle = $selected.find('.value').text();
    var $title = $selected.parents('.dropdown').find('.dropdown-title');

    $title.text(newTitle);
  }

  //TODO: Improve this
  var filterEvents = function(el) {
    if(this.location !== 'Event Location'
       && this.type !== 'Event Type'
       && this.topic !== 'Event Topic') {
      if(this.location === el.location
        && this.type === el.type
        && this.topic === el.topic){
        return true;
      }
    } else if(this.location === 'Event Location'
              && this.type !== 'Event Type'
              && this.topic !== 'Event Topic') {
      if(this.type === el.type && this.topic === el.topic) {
        return true;
      }
    } else if(this.location !== 'Event Location'
              && this.type === 'Event Type'
              && this.topic !== 'Event Topic') {
      if(this.location === el.location && this.topic === el.topic) {
        return true;
      }
    } else if(this.location !== 'Event Location'
              && this.type !== 'Event Type'
              && this.topic === 'Event Topic') {
        if(this.location === el.location && this.type === el.type) {
          return true;
        }
    } else if(this.location !== 'Event Location'
              && this.type === 'Event Type'
              && this.topic === 'Event Topic') {
        if(this.location === el.location) {
          return true;
        }
    } else if(this.location === 'Event Location'
              && this.type !== 'Event Type'
              && this.topic === 'Event Topic') {
        if(this.type === el.type) {
          return true;
        }
    } else if(this.location === 'Event Location'
              && this.type === 'Event Type'
              && this.topic !== 'Event Topic') {
        if(this.topic === el.topic) {
          return true;
        }
    } else {
      return true;
    }
  }

  const DESIRED_ELEMENTS_PER_PAGE = 3;

  this.EventsHandler = (function() {
    function EventsHandler() {
      this.render();
      this.currentPage = 1;
    }

    EventsHandler.prototype.bindEvents = function() {
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

      $.get('/events/data.json').then(function(data) {
        this.data = data;
        deferred.resolve();
      }.bind(this));

      return deferred.promise();
    }

    EventsHandler.prototype.renderEventList = function(options) {
      var $eventsList = $('.event-list');
      var eventsToPopulate = typeof options !== 'undefined' ? options.filteredData : this.data.events;
      if(this.currentPage < 1) {
        this.currentPage = 1;
        return;
      } else if(this.currentPage > this.getTotalPages(eventsToPopulate.length)) {
        this.currentPage = this.getTotalPages(eventsToPopulate.length);
        return;
      }
      if(typeof options !== 'undefined') {
        $eventsList.empty();
      }
      //The template for the event list
      var $templateEventListElement = $('#events-list-template').html();
      $templateEventListElement = $($templateEventListElement);
      var eventListArray = [];
      //Unbind all events from the list elements

      $('.pagination li span').off('click');
      if(eventsToPopulate.length > DESIRED_ELEMENTS_PER_PAGE) {
        document.querySelector('.pagination').innerHTML =
        getItems(this.getTotalPages(eventsToPopulate.length), this.currentPage)
        .map(function(e, i) {
          return('<li seperator="'+e.seperator+'" active="'+e.active+'" disabled="'+e.disabled+'">'
          + '<span>'+e.title+'</span>'
          + '</li>');
        }).join('');
        $('.pagination li[active="false"] span').on('click', this.render.bind(this));
        $('.pagination li[active="undefined"] span').on('click', this.render.bind(this));
      } else {
        document.querySelector('.pagination').innerHTML = '';
      }

      //Create the event list based on the data that we have filtered and page
      for(var i = (this.currentPage - 1) * DESIRED_ELEMENTS_PER_PAGE;
      i < (this.currentPage * DESIRED_ELEMENTS_PER_PAGE); i += 1) {
        var element = eventsToPopulate[i];
        if(element) {
          var $tempTemplate = $templateEventListElement.clone()
          $($tempTemplate).find('.event-topic').append('<span class="fa fa-chevron-down" aria-hidden="true"></span>'+element.topic);
          $($tempTemplate).find('.event-date').text(element.date);
          $($tempTemplate).find('.event-type').text(element.type);
          $($tempTemplate).find('.event-location').text(element.location);
          $($tempTemplate).find('.event-description').text(element.description);
          $($tempTemplate).find('.event-description').addClass('hide-description');
          //Separate the social tags
          var socialTags = element.social_tags.trim().split(',');
          socialTags.forEach(function(tag) {
            $($tempTemplate).find('.social-tags').append('<span class="social-tag">#'+tag+'</span>');
          });
          eventListArray.push($tempTemplate);
        } else {
          i = (this.currentPage * DESIRED_ELEMENTS_PER_PAGE) + 1;
        }
      }
      $eventsList.append(eventListArray);
      $('.event-list .event-headers span').off('click').on('click', function(event) {
        var descriptionToHideShow = $(event.currentTarget);
        $parentElement = $(descriptionToHideShow).parent().parent().parent();
        if(!$($parentElement).find('.event-description').hasClass('hide-description')) {
          $($parentElement).find('.event-description').addClass('hide-description');
        } else {
          $($parentElement).find('.event-description').removeClass('hide-description');
        }
      });
      if(typeof options === 'undefined') {
        //Populate the dropdowns
        this.populateDropdowns();
      }
    }

    EventsHandler.prototype.render = function(event) {
      function renderData(shouldWeFilter, pageNumber) {
        if(shouldWeFilter && !pageNumber) {
          var filters = this.getFilterValues();
          var filteredData = this.data.events.filter(filterEvents,filters);
          this.currentPage = 1;
          this.renderEventList({renderFilteredData: true, filteredData: filteredData});
        }
        else if(shouldWeFilter && pageNumber){
          var filters = this.getFilterValues();
          var filteredData = this.data.events.filter(filterEvents,filters);
          var newPageNumber;
          if(pageNumber.text().toLowerCase() === 'next'){
            newPageNumber = this.currentPage += 1;
          } else if(pageNumber.text().toLowerCase() === 'prev'){
            newPageNumber = this.currentPage -= 1;
          } else if(pageNumber.text().toLowerCase().indexOf('first') !== -1){
            newPageNumber = this.currentPage = 1;
          } else if(pageNumber.text().toLowerCase().indexOf('last') !== -1){
            newPageNumber = this.getTotalPages(filteredData.length);
          } else {
            newPageNumber = parseInt(pageNumber.text());
          }
          this.currentPage = newPageNumber;
          this.renderEventList({renderFilteredData: true, filteredData: filteredData});
        } else {
          this.renderEventList();
        }
      }
      if(this.data && typeof event !== 'undefined') {
        var $callingElement = $(event.currentTarget);
        var classCallingElement = $callingElement.parent()[0].className;
        if(classCallingElement.indexOf('dropdown-menu') != -1) {
          renderData.call(this, true);
        } else {
          renderData.call(this, true, $callingElement);
        }
      } else {
        $.when(this.getData()).then(function() {
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
      var $templateEventListDropdownElement = $('<li></li>');
      eventTypes = this.data.events.map(function(el){
        return el.type;
      });
      eventTypes.unshift('Event Type');
      eventTypes = filterDuplicatesArray(eventTypes);
      eventTopics = this.data.events.map(function(el){
        return el.topic;
      });
      eventTopics.unshift('Event Topic');
      eventTopics = filterDuplicatesArray(eventTopics);
      var eventLocations = this.data.events.map(function(el){
        return el.location;
      });
      eventLocations.unshift('Event Topic');
      eventLocations = filterDuplicatesArray(eventLocations);
      eventTypes.forEach(function(type) {
        var $tempDropdownEl = $templateEventListDropdownElement.clone();
        $($tempDropdownEl).append('<span class="value">'+type+'</span>');
        eventTypesDisplayArray.push($tempDropdownEl)
      });
      eventTopics.forEach(function(topic) {
        var $tempDropdownEl = $templateEventListDropdownElement.clone();
        $($tempDropdownEl).append('<span class="value">'+topic+'</span>');
        eventTopicsDisplayArray.push($tempDropdownEl)
      });
      eventLocations.forEach(function(location) {
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

    EventsHandler.prototype.filterTest = function() {
      var filters = this.getFilterValues();
      var filteredData = this.data.events.filter(filterEvents,filters);
      this.renderEventList({renderFilteredData: true, filteredData: filteredData});
    }

    EventsHandler.prototype.getFilterValues = function() {
      return {
        type: $('#event-types').find('.dropdown-title').text() || '',
        topic: $('#event-topics').find('.dropdown-title').text() || '',
        location: $('#event-location').find('.dropdown-title').text() || ''
      };
    }

    EventsHandler.prototype.getTotalPages = function(dataLength) {
      return Math.ceil(dataLength / DESIRED_ELEMENTS_PER_PAGE);
    }

    return EventsHandler;
  })();

  new EventsHandler();
})();
