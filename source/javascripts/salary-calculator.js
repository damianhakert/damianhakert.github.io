(function () {
  var salaryContainer = '.salary-container';
  var compensationAmount = salaryContainer + ' .compensation .amount';
  var defaultValue = '--';

  var CONTRACT_TYPE_EMPLOYEE = 'employee_factor';
  var CONTRACT_TYPE_CONTRACTOR = 'contractor_factor';

  // Dropdown Core functionality

  var setDropdown = function(event) {
    var $selected = $(event.currentTarget);

    if ($selected.hasClass('filter-container')) {
      return;
    }

    var key = $selected.find('.key').text();
    var value = $selected.find('.value').text();
    var displayValue = $selected.find('.display-value').text();
    var $title = $selected.parents('.dropdown').find('.title');
    var $subtitle = $selected.parents('.dropdown').find('.subtitle');

    // Get range values if available
    var min = $selected.find('.value').data('min');
    var max = $selected.find('.value').data('max');

    $title.text(key);
    $title.data('selected', value || key);

    if (min && max) {
      $title.data('min', min);
      $title.data('max', max);
    }

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

  this.SalaryCalculator = (function() {
    function SalaryCalculator() {
      this.bindEvents();
    }

    SalaryCalculator.prototype.bindEvents = function() {
      var $countryDropdown = $(salaryContainer + ' .country li:not(.filter-container)');
      var $countryDropdownContainer = $(salaryContainer + ' .country');
      var $cityDropdown = $(salaryContainer + ' .city li:not(.filter-container)');
      var $cityDropdownContainer = $(salaryContainer + ' .city');
      var $levelDropdown = $(salaryContainer + ' .level li');
      var $experienceDropdown = $(salaryContainer + ' .experience li');
      var $countryFilter = $('.js-country-filter');
      var $cityFilter = $('.js-city-filter');

      // Set selected dropdown value
      $countryDropdown.on('click', setDropdown);
      $cityDropdown.on('click', setDropdown);
      $levelDropdown.on('click', setDropdown);
      $experienceDropdown.on('click', setDropdown);

      // Render compensation
      $countryDropdown.on('click', this.render.bind(this));
      $cityDropdown.on('click', this.render.bind(this));
      $levelDropdown.on('click', this.render.bind(this));
      $experienceDropdown.on('click', this.render.bind(this));

      // Unlock and filter city dropdown
      $countryDropdown.on('click', this.filterCityDropdown.bind(this));
      $countryDropdown.on('click', this.resetCityDropdown.bind(this));

      // Render Formula
      $levelDropdown.on('click', this.renderFormula.bind(this));
      $experienceDropdown.on('click', this.renderFormula.bind(this));

      // Highlighting for Dropdown
      $(salaryContainer + ' .level').on('keydown', this.highlightDropdownItem.bind(this));
      $(salaryContainer + ' .experience').on('keydown', this.highlightDropdownItem.bind(this));

      // Highlighting for Filter
      $countryDropdownContainer.on('keydown', this.highlightDropdownItem.bind(this));
      $cityDropdownContainer.on('keydown', this.highlightDropdownItem.bind(this));

      // Filtering
      $countryFilter.on('keyup', this.search.bind(null, {
        dropdown: 'country'
      }));

      $cityFilter.on('keyup', this.search.bind(this, {
        dropdown: 'city',
        filter: 'country',
      }));

      $countryDropdownContainer.on('shown.bs.dropdown', this.focusInput);
      $cityDropdownContainer.on('shown.bs.dropdown', this.focusInput);
    }

    SalaryCalculator.prototype.focusInput = function(event) {
      $(event.target).find('.filter-input').focus();
    }

    SalaryCalculator.prototype.search = function(data, event) {
      var text = event.target.value.toLowerCase();
      var filterValue = null;
      var $items = $(salaryContainer + ' .' + data.dropdown + ' li:not(.filter-container)');

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

    SalaryCalculator.prototype.highlightDropdownItem = function(e) {
      var $this = $(e.currentTarget);
      var listContainer = $this.find('.dropdown-menu.dropdown-scroll');
      var list = $this.find('li:not(.hidden):not(.filter-container)');
      var nextLi, prevLi, focusedLi;

      if ($this.hasClass('open')) {
        if ((e.keyCode === 38 || e.keyCode === 40) &&
            !list.filter('li.is-focused').length) {
          list.first().addClass('is-focused');
        }

        if (e.keyCode === 38 && !list.first().hasClass('is-focused')) { // Up
          prevLi = list
                    .filter('li.is-focused')
                    .prevAll('li:not(.hidden)').first();

          list.removeClass('is-focused');

          if (prevLi[0] === list.first()[0])
            list.first().addClass('is-focused');
          else
            prevLi.addClass('is-focused');
        } else if (e.keyCode === 40 && !list.last().hasClass('is-focused')) { // Down
          nextLi = list
                    .filter('li.is-focused')
                    .nextAll('li:not(.hidden)').first();

          list.removeClass('is-focused');

          if (nextLi[0] === list.last()[0])
            list.last().addClass('is-focused');
          else
            nextLi.addClass('is-focused');
        } else if (e.keyCode === 13) { // Enter / Return
          // Triggering click directly while keydown is active
          // doesn't hide dropdown, this workaround does. Need better way :/
          setTimeout(function() { list.filter('li.is-focused').trigger('click'); });
        }

        focusedLi = list.filter('li.is-focused');
        if (list.first()[0] !== focusedLi[0]) {
          if (!isFullyVisible(focusedLi, listContainer))
            listContainer.scrollTop(list.index(focusedLi) * focusedLi.outerHeight());
        }
        else {
          listContainer.scrollTop(0);
        }
      }
    }

    // Custom dropdown functionality

    SalaryCalculator.prototype.filterCityDropdown = function() {
      var selectedCountry = this.getElementValues().country;
      var $cities = $(salaryContainer + ' .city li:not(.filter-container)');

      $cities.each(function(index, element) {
        var $element = $(element);
        if ($element.data('country') === selectedCountry) {
          $element.removeClass('hidden');
        } else {
          $element.addClass('hidden');
        }
      });
    }

    SalaryCalculator.prototype.resetCityDropdown = function() {
      var $cityDropdownBtn = $(salaryContainer + ' .city .btn');
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

    SalaryCalculator.prototype.getData = function() {
      var deferred = jQuery.Deferred();

      $.get('/salary/data.json').then(function(data) {
        // Cache the data
        this.data = data;
        deferred.resolve();
      }.bind(this));

      return deferred.promise();
    }

    SalaryCalculator.prototype.render = function() {
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

    SalaryCalculator.prototype.renderCompensation = function(input) {
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

    SalaryCalculator.prototype.renderContractType = function() {
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

    SalaryCalculator.prototype.renderFormula = function() {
      var values = this.getElementValues();
      var rentIndex = this.calculateRentIndex(values.city, values.country);
      var contract = this.calculateContractFactor(values.country);
      var experience = values.experience;

      $('.formula .level .value').text(values.level ? values.level : defaultValue);
      $('.formula .experience .value').text(experience.min && experience.max ? experience.min + ' to ' + experience.max : defaultValue);

      $('.formula .rentIndex .value').text(rentIndex ? rentIndex : defaultValue);
      $('.formula .contractType .value').text(contract.hasOwnProperty('factor') ? contract.factor.toFixed(2) : defaultValue);
    }

    SalaryCalculator.prototype.renderInvalidCompensation = function() {
      $(compensationAmount).text(defaultValue);
    }

    // Pure functions

    SalaryCalculator.prototype.getElementValues = function() {
      return {
        salary: $(salaryContainer).data('salary') || '',
        country: $(salaryContainer + ' .country .title').data('selected') || '',
        city: $(salaryContainer + ' .city .title').data('selected') || '',
        level: $(salaryContainer + ' .level .title').data('selected') || '',
        experience: {
          min: $(salaryContainer + ' .experience .title').data('min') || '',
          max: $(salaryContainer + ' .experience .title').data('max') || ''
        }
      };
    }

    SalaryCalculator.prototype.calculateRentIndex = function(city, country) {
      if (this.data && this.data.numbeo) {
        var locationData = this.data.numbeo.find(function(o) {
          return o.country === country && o.city === city;
        });

        return locationData ? parseFloat((locationData.rentIndex * 0.01).toFixed(2)) : 0;
      }

      // Rent Index will never be zero, safe to return as error value
      return 0;
    }

    SalaryCalculator.prototype.calculateContractFactor = function(country) {
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

    SalaryCalculator.prototype.calculateCompensation = function(benchmark, rentIndex, levelIndex, contractType, experienceFactor) {
      return Math.round(benchmark * (rentIndex + 0.25) * levelIndex * contractType * experienceFactor);
    };

    SalaryCalculator.prototype.formatAmount = function(amount) {
      return '$' + amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return SalaryCalculator;
  })();

  new SalaryCalculator();
})();
