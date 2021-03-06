(function () {
  var moveContainer = '.move-container';
  var formulaContainer = '.formula-container';
  var compensationAmount = moveContainer + ' .compensation .amount';
  var defaultValue = '--';

  var CONTRACT_TYPE_EMPLOYEE = 'employee_factor';
  var CONTRACT_TYPE_CONTRACTOR = 'contractor_factor';
  var CURRENT_COUNTRY = 'current';
  var NEW_COUNTRY = 'new';

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

      var $currentSalary = $(moveContainer + ' .current-salary input');

      // Set selected dropdown value
      $currentCountryDropdown.on('click', setDropdown);
      $currentCityDropdown.on('click', setDropdown);
      $newCountryDropdown.on('click', setDropdown);
      $newCityDropdown.on('click', setDropdown);

      // Render compensation
      $currentSalary.on('keyup', this.render.bind(this));
      $currentCountryDropdown.on('click', this.render.bind(this));
      $currentCityDropdown.on('click', this.render.bind(this));
      $newCountryDropdown.on('click', this.render.bind(this));
      $newCityDropdown.on('click', this.render.bind(this));

      // Unlock and filter city dropdown
      $currentCountryDropdown.on('click', this.filterCityDropdown.bind(this));
      $currentCountryDropdown.on('click', this.resetCityDropdown.bind(this));
      $newCountryDropdown.on('click', this.filterCityDropdown.bind(this));
      $newCountryDropdown.on('click', this.resetCityDropdown.bind(this));

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
        filter: 'current-country',
      }));
      $newCityFilter.on('keyup', this.search.bind(this, {
        dropdown: 'new-city',
        filter: 'new-country',
      }));

      $currentSalary.on('keypress', this.preventLetters.bind(this));

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
      var filterName;

      if (data.filter) {
        filterName = data.filter === 'current-country' ? 'currentCountry' : 'newCountry';
        filterValue = this.getElementValues()[filterName];
      }

      $items.each(function(index, element) {
        var $element = $(element);
        var value = $element.children('.key').text().toLowerCase();
        var searchableElement = true;

        if (data.filter && filterValue) {
          searchableElement = $element.data(data.filter.toLowerCase()) === filterValue;
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
          list.filter('li.is-focused').trigger('click');
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

    MoveCalculator.prototype.preventLetters = function(e) {
      // Check if input value is number between 0 to 9 and Backspace key (firefox)
      if ((e.which < 48 || e.which > 57) && e.which !== 8) { // Note: `e.which` is part of jQuery
        e.preventDefault();
      }
    }

    // Custom dropdown functionality

    MoveCalculator.prototype.filterCityDropdown = function(e) {
      var $countryDropdown = $(e.currentTarget).parents('.dropdown');
      var selectedCountry, $cities, dataAttr;

      if ($countryDropdown.hasClass('current-country')) {
        selectedCountry = this.getElementValues().currentCountry;
        dataAttr = 'current-country';
        $cities = $(moveContainer + ' .current-city li:not(.filter-container)');
      } else if ($countryDropdown.hasClass('new-country')) {
        selectedCountry = this.getElementValues().newCountry;
        dataAttr = 'new-country';
        $cities = $(moveContainer + ' .new-city li:not(.filter-container)');
      }

      $cities.each(function(index, element) {
        var $element = $(element);
        if ($element.data(dataAttr) === selectedCountry) {
          $element.removeClass('hidden');
        } else {
          $element.addClass('hidden');
        }
      });
    }

    MoveCalculator.prototype.resetCityDropdown = function(e) {
      var $countryDropdown = $(e.currentTarget).parents('.dropdown');
      var $cityDropdownBtn, $filterInput;

      if ($countryDropdown.hasClass('current-country')) {
        $cityDropdownBtn = $(moveContainer + ' .current-city .btn');
        $filterInput = $('.current-city .js-city-filter');
      } else if ($countryDropdown.hasClass('new-country')) {
        $cityDropdownBtn = $(moveContainer + ' .new-city .btn');
        $filterInput = $('.new-city .js-city-filter');
      }

      var $cityDropdownTitle = $cityDropdownBtn.find('.title');
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

    MoveCalculator.prototype.render = function(e) {
      var input = this.getElementValues();

      function renderData() {
        this.renderContractType(input.currentCountry, CURRENT_COUNTRY);
        this.renderContractType(input.newCountry, NEW_COUNTRY);

        if (input.currentCity && input.newCity && input.salary) {
          this.renderCompensation(input);
        } else {
          this.renderInvalidCompensation();
        }

        this.renderFormula();
      }

      if (this.data) {
        renderData.call(this);
      } else {
        $.when(this.getData()).then(function() {
            renderData.call(this);
          }.bind(this),
          this.renderInvalidCompensation.bind(this));
      }

      this.renderContainerUpdates(e);
    }

    MoveCalculator.prototype.renderContainerUpdates = function(e) {
      var $currentEl = $(e.currentTarget);
      var inputSalary;

      if ($currentEl.attr('id') === 'current-salary') {
        inputSalary = parseInt($currentEl.val().split(',').join(''));

        if (inputSalary) {
          inputSalary = inputSalary.toLocaleString();
          $currentEl.val(inputSalary);
          $currentEl.parent().toggleClass('has-value', inputSalary.length > 0);
        } else {
          $currentEl.parent().removeClass('has-value');
        }
      }
    }

    MoveCalculator.prototype.renderCompensation = function(input) {
      var numbeo = this.data.numbeo;
      var contracts = this.data.contractTypes;

      var salary = input.salary;

      var currentRentIndex = this.calculateRentIndex(input.currentCity, input.currentCountry);
      var currentContract = this.calculateContractFactor(input.currentCountry);
      var currentMarketAdjustment = this.calculateMarketAdjustment(input.currentCity, input.currentCountry);
      var newRentIndex = this.calculateRentIndex(input.newCity, input.newCountry);
      var newContract = this.calculateContractFactor(input.newCountry);
      var newMarketAdjustment = this.calculateMarketAdjustment(input.newCity, input.newCountry);

      if (!currentRentIndex ||
          !newRentIndex) {
        //When the city and country combination selected do not exist
        return this.renderInvalidCompensation();
      }

      var newSalary = this.calculateCompensation({
        salary: salary,
        currentRentIndex: currentRentIndex,
        currentContractTypeFactor: currentContract.factor,
        currentMarketAdjustment: currentMarketAdjustment,
        newRentIndex: newRentIndex,
        newContractTypeFactor: newContract.factor,
        newMarketAdjustment: newMarketAdjustment
      });
      $(compensationAmount).text(this.formatAmount(newSalary) + ' USD');
    }

    MoveCalculator.prototype.renderContractType = function(selectedCountry, type) {
      var countryContract = this.calculateContractFactor(selectedCountry);
      var $containerContract = type === CURRENT_COUNTRY ? $('.current-contract') : $('.new-contract');

      if (selectedCountry) {
        if (countryContract.type === CONTRACT_TYPE_EMPLOYEE) {
          $containerContract.find('.company-type').text('Inc.');
          $containerContract.find('.contract-type').text('Employee');
        } else {
          $containerContract.find('.company-type').text('BV.');
          $containerContract.find('.contract-type').text('Contractor');
        }

        $containerContract.removeClass('hidden');
      } else {
        $containerContract.addClass('hidden');
      }
    }

    MoveCalculator.prototype.renderFormula = function() {
      var values = this.getElementValues();
      var currentRentIndex = this.calculateRentIndex(values.currentCity, values.currentCountry);
      var newRentIndex = this.calculateRentIndex(values.newCity, values.newCountry);
      var salary = values.salary;
      var currentContract, newContract;
      var currentMarketAdjustment, newMarketAdjustment;

      if (values.currentCountry) {
        currentContract = this.calculateContractFactor(values.currentCountry);

        if (values.currentCity) {
          currentMarketAdjustment = this.calculateMarketAdjustment(values.currentCity, values.currentCountry);
        }
      }

      if (values.newCountry) {
        newContract = this.calculateContractFactor(values.newCountry);

        if (values.newCity) {
          newMarketAdjustment = this.calculateMarketAdjustment(values.newCity, values.newCountry);
        }
      }

      $('.formula .currentSalary .value').text(salary.length ? this.formatAmount(salary) : '$ ' + defaultValue);
      $('.formula .currentRentIndex .value').text(currentRentIndex ? currentRentIndex : defaultValue);
      $('.formula .currentMarketAdjustment .value').text(currentMarketAdjustment ? currentMarketAdjustment : defaultValue);
      $('.formula .newRentIndex .value').text(newRentIndex ? newRentIndex : defaultValue);
      $('.formula .currentContractTypeFactor .value').text(currentContract && currentContract.hasOwnProperty('factor') ? currentContract.factor.toFixed(2) : defaultValue);
      $('.formula .newContractTypeFactor .value').text(newContract && newContract.hasOwnProperty('factor') ? newContract.factor.toFixed(2) : defaultValue);
      $('.formula .newMarketAdjustment .value').text(newMarketAdjustment ? newMarketAdjustment : defaultValue);
    }

    MoveCalculator.prototype.renderInvalidCompensation = function() {
      $(compensationAmount).text(defaultValue);
    }

    // Pure functions

    MoveCalculator.prototype.getElementValues = function() {
      return {
        salary: $(moveContainer + ' .current-salary input').val().split(',').join('') || '',
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

    MoveCalculator.prototype.calculateMarketAdjustment = function(city, country) {
      if (this.data && this.data.numbeo) {
        var locationData = this.data.marketAdjustments.find(function(o) {
          return o.country === country && o.city === city;
        });

        return locationData ? parseFloat((locationData.hotmarket * 0.01).toFixed(2)) : 0;
      }
    };

    MoveCalculator.prototype.calculateCompensation = function(inputs) {
      return Math.round(inputs.salary * (inputs.newRentIndex + inputs.newMarketAdjustment + 0.25) / (inputs.currentRentIndex + inputs.currentMarketAdjustment + 0.25) * (inputs.newContractTypeFactor / inputs.currentContractTypeFactor));
    };

    MoveCalculator.prototype.formatAmount = function(amount) {
      return '$' + amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return MoveCalculator;
  })();

  new MoveCalculator();
})();
