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

  const DESIRED_ELEMENTS_PER_PAGE = 3;

  this.EventsHandler = (function() {
    function EventsHandler() {
      this.eventListDOM = $('.event-list li');
      this.render();
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

    EventsHandler.prototype.renderEventList = function(options) {
      var $eventsList = $('.event-list');
      var eventsToPopulate = options.renderFilteredData ? options.filteredData : this.eventListDOM;
      if(this.currentPage < 1) {
        this.currentPage = 1;
        return;
      } else if(this.currentPage > this.getTotalPages(eventsToPopulate.length)) {
        this.currentPage = this.getTotalPages(eventsToPopulate.length);
        return;
      }

      $eventsList.empty();

      var eventListArray = [];
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
          eventListArray.push(eventsToPopulate[i]);
        } else {
          break;
        }
      }

      $eventsList.append(eventListArray).hide().fadeIn();
      $('.event-list .event-headers span').off('click').on('click', function(event) {
        var currentArrow = $(event.currentTarget).parent();
        $parentElement = $(currentArrow).parent().parent();
        if(currentArrow.hasClass('is-open')) {
          currentArrow.removeClass('is-open');
          $($parentElement).find('.event-description').hide();
        } else {
          currentArrow.addClass('is-open');
          $($parentElement).find('.event-description').fadeIn();
        }
      });
      //Populate dropdowns based on the current data shown
      if(options.renderFilteredData){
        this.populateDropdowns(options.filteredData, false);
      }
      else {
        this.populateDropdowns(this.eventListDOM, true);
      }

    }

    EventsHandler.prototype.filterData = function() {
      var filters = this.getFilterValues();
      filters.topic = filters.topic.toLowerCase();
      filters.type = filters.type.toLowerCase();
      filters.location = filters.location.toLowerCase();
      var filteredData = this.eventListDOM.filter(function (index) {
        var eventTopic = $(this).find('.event-topic').first().text().trim().toLowerCase();
        var eventType = $(this).find('.event-type').first().text().trim().toLowerCase();
        var eventLocation = $(this).find('.event-location').first().text().trim().toLowerCase();
        if(filters.topic === 'event topic' && filters.type === 'event type' && filters.location === 'event location') {
          return true;
        } else if (filters.topic !== 'event topic' && filters.type === 'event type' && filters.location === 'event location') {
          return eventTopic === filters.topic;
        } else if (filters.topic === 'event topic' && filters.type !== 'event type' && filters.location === 'event location') {
          return eventType === filters.type;
        } else if (filters.topic === 'event topic' && filters.type === 'event type' && filters.location !== 'event location') {
          return eventLocation === filters.location;
        } else if (filters.topic !== 'event topic' && filters.type !== 'event type' && filters.location === 'event location'){
          return eventTopic === filters.topic && eventType === filters.type;
        } else if (filters.topic !== 'event topic' && filters.type === 'event type' && filters.location !== 'event location'){
          return eventTopic === filters.topic && eventLocation === filters.location;
        } else if (filters.topic === 'event topic' && filters.type !== 'event type' && filters.location !== 'event location'){
          return eventType === filters.type && eventLocation === filters.location;
        } else if (filters.topic !== 'event topic' && filters.type !== 'event type' && filters.location !== 'event location'){
          return eventTopic === filters.topic && eventType === filters.type && eventLocation === filters.location;
        } else {
          return true;
        }
      });
      return filteredData;
    }

    EventsHandler.prototype.render = function(event) {
      function renderData(shouldWeFilter, pageNumber) {
        if(shouldWeFilter && !pageNumber) {
          var filteredData = this.filterData.call(this);
          this.currentPage = 1;
          this.renderEventList({renderFilteredData: true, filteredData: filteredData});
        }
        else if(shouldWeFilter && pageNumber){
          var filteredData = this.filterData.call(this);
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
          this.currentPage = 1;
          this.renderEventList({renderFilteredData: false});
        }
      }
      if(typeof event !== 'undefined') {
        var $callingElement = $(event.currentTarget);
        var classCallingElement = $callingElement.parent()[0].className;
        if(classCallingElement.indexOf('dropdown-menu') != -1) {
          renderData.call(this, true);
        } else {
          renderData.call(this, true, $callingElement);
        }
      }
      else {
        renderData.call(this, false);
      }
    }

    EventsHandler.prototype.updateDropdownData = function(currentlyDisplayedData, firstExecution) {
      var dropdownData = {
        types: ['Event Type'],
        locations: ['Event Location'],
        topics: ['Event Topic']
      };
      currentlyDisplayedData.map(function(event){
        var eventTopic = $(this).find('.event-topic').first().text().trim();
        var eventType = $(this).find('.event-type').first().text().trim();
        var eventLocation = $(this).find('.event-location').first().text().trim();
        dropdownData.types.push(eventType);
        dropdownData.locations.push(eventLocation);
        dropdownData.topics.push(eventTopic);
      });
      dropdownData.types = filterDuplicatesArray(dropdownData.types);
      dropdownData.locations = filterDuplicatesArray(dropdownData.locations);
      dropdownData.topics = filterDuplicatesArray(dropdownData.topics);
      return dropdownData;
    }

    EventsHandler.prototype.populateDropdowns = function(currentlyDisplayedData, firstExecution) {
      var eventTypesDisplayArray = [];
      var eventTopicsDisplayArray = [];
      var eventLocationDisplayArray = [];
      var filterValues = this.getFilterValues();
      var currentDropdownData = this.updateDropdownData(currentlyDisplayedData);
      //Populate the dropdowns
      var $eventTypeDropdown = $('#event-types ul');
      var $eventTopicDropdown = $('#event-topics ul');
      var $eventLocationDropdown = $('#event-location ul');
      //The template for the dropdown list
      $eventTypeDropdown.empty();
      currentDropdownData.types.forEach(function(type) {
        $eventTypeDropdown.append('<li><span class="value">'+type+'</span></li>');
      });
      $eventTopicDropdown.empty();
      currentDropdownData.topics.forEach(function(topic) {
        $eventTopicDropdown.append('<li><span class="value">'+topic+'</span></li>');
      });
      $eventLocationDropdown.empty();
      currentDropdownData.locations.forEach(function(location) {
        $eventLocationDropdown.append('<li><span class="value">'+location+'</span></li>');
      });
      $eventTypeDropdown.append(eventTypesDisplayArray);
      $eventTopicDropdown.append(eventTopicsDisplayArray);
      $eventLocationDropdown.append(eventLocationDisplayArray);
      //Set title to the first element of the array
      if(firstExecution) {
        $('#event-types .dropdown-title').text('Event Type');
        $('#event-location .dropdown-title').text('Event Location');
        $('#event-topics .dropdown-title').text('Event Topic');
      }
      else {
        $('#event-types .dropdown-title').text(filterValues.type);
        $('#event-location .dropdown-title').text(filterValues.location);
        $('#event-topics .dropdown-title').text(filterValues.topic);
      }

      this.bindEvents();
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
