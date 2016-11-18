(function () {
  var moveContainer = '.move-container';
  var compensationAmount = moveContainer + ' .compensation .amount';
  var defaultValue = '--';

  var CONTRACT_TYPE_EMPLOYEE = 'employee_factor';
  var CONTRACT_TYPE_CONTRACTOR = 'contractor_factor';

  // Dropdown Core functionality

  var setDropdown = function(e) {
    var $selected = $(e.currentTarget);

    if ($selected.hasClass('filter-container')) {
      return;
    }

    var key = $selected.find('.key').text();
    var value = $selected.find('.value').text();
    var displayValue = $selected.find('.display-value').text();
    var $title = $selected.parents('.dropdown').find('.title');
    var $subtitle = $selected.parents('.dropdown').find('.subtitle');

    $title.text(key);
    $title.data('selected', value || key);

    if (value) {
      $subtitle.text(value);
    } else if (displayValue) {
      $subtitle.text(displayValue);
    }
  }

  var isFullyVisible = function(el, parentEl) {
    var parentHeight = parentEl.height() - el.height(); // Make sure last item is not partially visible
    var elTop = el.position().top;
    var elBottom = elTop + (el.height());

    return (elBottom > 0 && elTop < parentHeight);
  }

  this.MoveCalculator = (function() {
    function MoveCalculator() {
      this.bindEvents();
    }

    MoveCalculator.prototype.bindEvents = function() {
      var $currentCountryDropdownContainer = $(moveContainer + ' .current-country');
      var $currentCountryDropdown = $currentCountryDropdownContainer.find('li:not(.filter-container)');
      var $currentCountryFilter = $currentCountryDropdownContainer.find('.js-country-filter');
      var $newCountryDropdownContainer = $(moveContainer + ' .new-country');
      var $newCountryDropdown = $newCountryDropdownContainer.find('li:not(.filter-container)');
      var $newCountryFilter = $newCountryDropdownContainer.find('.js-country-filter');

      var $currentCityDropdownContainer = $(moveContainer + ' .current-city');
      var $currentCityDropdown = $currentCityDropdownContainer.find('li:not(.filter-container)');
      var $currentCityFilter = $currentCityDropdownContainer.find('.js-city-filter');
      var $newCityDropdownContainer = $(moveContainer + ' .new-city');
      var $newCityDropdown = $newCityDropdownContainer.find('li:not(.filter-container)');
      var $newCityFilter = $newCityDropdownContainer.find('.js-city-filter');

      // Set selected dropdown value
      $currentCountryFilter.on('click', setDropdown);
      $currentCityDropdown.on('click', setDropdown);
      $newCountryFilter.on('click', setDropdown);
      $newCityDropdown.on('click', setDropdown);

      // Render compensation
      // $countryDropdown.on('click', this.render.bind(this));
      // $cityDropdown.on('click', this.render.bind(this));

      // Unlock and filter city dropdown
      $currentCountryDropdown.on('click', this.filterCityDropdown.bind(this));
      $currentCountryDropdown.on('click', this.resetCityDropdown.bind(this));
      $newCountryDropdown.on('click', this.filterCityDropdown.bind(this));
      $newCountryDropdown.on('click', this.resetCityDropdown.bind(this));

      // Render Formula

      // Highlighting for Filter
      $currentCountryDropdownContainer.on('keydown', this.highlightDropdownItem.bind(this));
      $currentCityDropdownContainer.on('keydown', this.highlightDropdownItem.bind(this));
      $newCountryDropdownContainer.on('keydown', this.highlightDropdownItem.bind(this));
      $newCityDropdownContainer.on('keydown', this.highlightDropdownItem.bind(this));

      // Filtering
      $currentCountryFilter.on('keyup', this.search.bind(null, {
        dropdown: 'current-country'
      }));
      $newCountryFilter.on('keyup', this.search.bind(null, {
        dropdown: 'new-country'
      }));

      $currentCityFilter.on('keyup', this.search.bind(this, {
        dropdown: 'current-city',
        filter: 'country',
      }));
      $newCityFilter.on('keyup', this.search.bind(this, {
        dropdown: 'new-city',
        filter: 'country',
      }));

      $currentCountryDropdownContainer.on('shown.bs.dropdown', this.focusInput);
      $newCountryDropdownContainer.on('shown.bs.dropdown', this.focusInput);
      $currentCityDropdownContainer.on('shown.bs.dropdown', this.focusInput);
      $newCityDropdownContainer.on('shown.bs.dropdown', this.focusInput);
    }

    MoveCalculator.prototype.focusInput = function(e) {
      $(e.target).find('.filter-input').focus();
    }

    MoveCalculator.prototype.search = function(data, e) {
      var text = e.target.value.toLowerCase();
      var filterValue = null;
      var $items = $(moveContainer + ' .' + data.dropdown + ' li:not(.filter-container)');

      if (data.filter) {
        filterValue = this.getElementValues()[data.filter];
      }

      $items.each(function(index, element) {
        var $element = $(element);
        var value = $element.children('.key').text().toLowerCase();
        var searchableElement = true;

        if (data.filter && filterValue) {
          searchableElement = $element.data(data.filter) === filterValue;
        }

        if (value.indexOf(text) == -1 || !searchableElement) {
          $element.addClass('hidden');
        } else {
          $element.removeClass('hidden');
        }
      });
    }

    MoveCalculator.prototype.highlightDropdownItem = function(e) {
      var $this = $(e.currentTarget);
      var listContainer = $this.find('.dropdown-menu.dropdown-scroll');
      var list = $this.find('li:not(.hidden):not(.filter-container)');
      var nextLi, prevLi, focusedLi;

      if ($this.hasClass('open')) {
        if ((e.keyCode === 38 || e.keyCode === 40) &&
            !list.filter('li.is-focused').length) {
          list.first().addClass('is-focused');
          return;
        }

        if (e.keyCode === 38 && !list.first().hasClass('is-focused')) { // Up
          prevLi = list
                    .filter('li.is-focused')
                    .prevAll('li:not(.hidden)').first();

          list.removeClass('is-focused');

          if (prevLi[0] === list.first()[0]) {
            list.first().addClass('is-focused');
          } else {
            prevLi.addClass('is-focused');
          }
        } else if (e.keyCode === 40 && !list.last().hasClass('is-focused')) { // Down
          nextLi = list
                    .filter('li.is-focused')
                    .nextAll('li:not(.hidden)').first();

          list.removeClass('is-focused');

          if (nextLi[0] === list.last()[0]) {
            list.last().addClass('is-focused');
          } else {
            nextLi.addClass('is-focused');
          }
        } else if (e.keyCode === 9) { // Tab keyCode
          $this.removeClass('open');
        } else if (e.keyCode === 13) { // Enter / Return
          // Triggering click directly while keydown is active
          // doesn't hide dropdown, this workaround does. Need better way :/
          setTimeout(function() { list.filter('li.is-focused').trigger('click'); });
        }

        focusedLi = list.filter('li.is-focused');
        if (focusedLi.length && list.first()[0] !== focusedLi[0]) {
          if (!isFullyVisible(focusedLi, listContainer)) {
            listContainer.scrollTop(list.index(focusedLi) * focusedLi.outerHeight());
          }
        }
        else {
          listContainer.scrollTop(0);
        }
      }
    }

    // Custom dropdown functionality

    MoveCalculator.prototype.filterCityDropdown = function() {
      var selectedCountry = this.getElementValues().country;
      debugger;
      var $cities = $(moveContainer + ' .city li:not(.filter-container)');

      $cities.each(function(index, element) {
        var $element = $(element);
        if ($element.data('country') === selectedCountry) {
          $element.removeClass('hidden');
        } else {
          $element.addClass('hidden');
        }
      });
    }

    MoveCalculator.prototype.resetCityDropdown = function() {
      debugger;
      var $cityDropdownBtn = $(moveContainer + ' .city .btn');
      var $cityDropdownTitle = $cityDropdownBtn.find('.title');
      var $filterInput = $('.js-city-filter');
      $filterInput.val('');
      $cityDropdownBtn.removeClass('disabled');
      $cityDropdownTitle.text('--');
      $cityDropdownTitle.data('selected', '');
      $cityDropdownBtn.find('.subtitle').text('');
      this.renderInvalidCompensation();
      this.renderFormula();
    }

    // Render functions

    MoveCalculator.prototype.getData = function() {
      var deferred = jQuery.Deferred();

      $.get('/salary/data.json').then(function(data) {
        // Cache the data
        this.data = data;
        deferred.resolve();
      }.bind(this));

      return deferred.promise();
    }

    MoveCalculator.prototype.render = function() {
      var input = this.getElementValues();

      function renderData() {
        if (input.country && input.city && input.level && input.experience.min && input.experience.max) {
          this.renderCompensation(input);
        } else {
          this.renderInvalidCompensation();
        }
        this.renderFormula();
        this.renderContractType();
      }

      if (this.data) {
        renderData.call(this);
      } else {
        $.when(this.getData()).then(function() {
            renderData.call(this);
          }.bind(this),
          this.renderInvalidCompensation.bind(this));
      }
    }

    MoveCalculator.prototype.renderCompensation = function(input) {
      var numbeo = this.data.numbeo;
      var contracts = this.data.contractTypes;

      var levelIndex = parseFloat(input.level);
      var benchmark = input.salary;

      var rentIndex = this.calculateRentIndex(input.city, input.country);
      var contract = this.calculateContractFactor(input.country);

      if (!rentIndex) {
        //When the city and country combination selected do not exist
        return this.renderInvalidCompensation();
      }

      var min = this.calculateCompensation(benchmark, rentIndex, levelIndex, contract.factor, input.experience.min);
      var max = this.calculateCompensation(benchmark, rentIndex, levelIndex, contract.factor, input.experience.max);
      $(compensationAmount).text(this.formatAmount(min) + ' - ' + this.formatAmount(max) + ' USD');
    }

    MoveCalculator.prototype.renderContractType = function() {
      var country = this.getElementValues().country;
      var contract = this.calculateContractFactor(country);
      var $container = $('.contract-type-container');

      if (contract.type === CONTRACT_TYPE_EMPLOYEE) {
        $container.find('.grammer').text('an');
        $container.find('.company-type').text('Inc.');
        $container.find('.contract-type').text('employee');
      } else {
        $container.find('.grammer').text('a');
        $container.find('.company-type').text('BV.');
        $container.find('.contract-type').text('contractor');
      }

      $container.removeClass('hidden');
    }

    MoveCalculator.prototype.renderFormula = function() {
      var values = this.getElementValues();
      var rentIndex = this.calculateRentIndex(values.city, values.country);
      var contract = this.calculateContractFactor(values.country);
      var experience = values.experience;

      $('.formula .level .value').text(values.level ? values.level : defaultValue);
      $('.formula .experience .value').text(experience.min && experience.max ? experience.min + ' to ' + experience.max : defaultValue);

      $('.formula .rentIndex .value').text(rentIndex ? rentIndex : defaultValue);
      $('.formula .contractType .value').text(contract.hasOwnProperty('factor') ? contract.factor.toFixed(2) : defaultValue);
    }

    MoveCalculator.prototype.renderInvalidCompensation = function() {
      $(compensationAmount).text(defaultValue);
    }

    // Pure functions

    MoveCalculator.prototype.getElementValues = function() {
      return {
        salary: $(moveContainer + ' .current-salary input').val() || '',
        currentCountry: $(moveContainer + ' .current-country .title').data('selected') || '',
        currentCity: $(moveContainer + ' .current-city .title').data('selected') || '',
        newCountry: $(moveContainer + ' .new-country .title').data('selected') || '',
        newCity: $(moveContainer + ' .new-city .title').data('selected') || ''
      };
    }

    MoveCalculator.prototype.calculateRentIndex = function(city, country) {
      if (this.data && this.data.numbeo) {
        var locationData = this.data.numbeo.find(function(o) {
          return o.country === country && o.city === city;
        });

        return locationData ? parseFloat((locationData.rentIndex * 0.01).toFixed(2)) : 0;
      }

      // Rent Index will never be zero, safe to return as error value
      return 0;
    }

    MoveCalculator.prototype.calculateContractFactor = function(country) {
      var contract = {};

      if (this.data && this.data.contractTypes) {
        var defaultContractorFactor = this.data.contractTypes.find(function (o) {
          return o.country === '*';
        }).contractor_factor;

        var contractType = this.data.contractTypes.find(function(o) {
          return o.country === country
        });

        if (contractType && contractType.hasOwnProperty(CONTRACT_TYPE_EMPLOYEE)) {
          contract.type = CONTRACT_TYPE_EMPLOYEE;
          contract.factor = contractType[CONTRACT_TYPE_EMPLOYEE];
        } else if (contractType) {
          contract.type = CONTRACT_TYPE_CONTRACTOR;
          contract.factor = contractType[CONTRACT_TYPE_CONTRACTOR];
        } else {
          contract.type = CONTRACT_TYPE_CONTRACTOR;
          contract.factor = defaultContractorFactor;
        }
      }

      return contract;
    }

    MoveCalculator.prototype.calculateCompensation = function(benchmark, rentIndex, levelIndex, contractType, experienceFactor) {
      return Math.round(benchmark * (rentIndex + 0.25) * levelIndex * contractType * experienceFactor);
    };

    MoveCalculator.prototype.formatAmount = function(amount) {
      return '$' + amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return MoveCalculator;
  })();

  new MoveCalculator();
})();
