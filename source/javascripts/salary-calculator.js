(function () {
  var salaryContainer = '.salary-container';
  var compensationAmount = salaryContainer + ' .compensation .amount';
  var defaultValue = '--';

  var CONTRACT_TYPE_EMPLOYEE = 'employee';
  var CONTRACT_TYPE_CONTRACTOR = 'contractor';

  // Dropdown Core functionality

  var setDropdown = function(event) {
    var $selected = $(event.currentTarget);
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

  this.SalaryCalculator = (function() {
    function SalaryCalculator() {
      this.bindEvents();
    }

    SalaryCalculator.prototype.bindEvents = function() {
      var $countryDropdown = $(salaryContainer + ' .country li');
      var $cityDropdown = $(salaryContainer + ' .city li');
      var $levelDropdown = $(salaryContainer + ' .level li');
      var $experienceDropdown = $(salaryContainer + ' .experience li');

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
    }

    // Custom dropdown functionality

    SalaryCalculator.prototype.filterCityDropdown = function() {
      var selectedCountry = this.getElementValues().country;
      var $cities = $(salaryContainer + ' .city li');

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

      this.renderContractType(contract);

      var min = this.calculateCompensation(benchmark, rentIndex, levelIndex, contract.factor, input.experience.min);
      var max = this.calculateCompensation(benchmark, rentIndex, levelIndex, contract.factor, input.experience.max);
      $(compensationAmount).text(this.formatAmount(min) + ' - ' + this.formatAmount(max) + ' USD');
    }

    SalaryCalculator.prototype.renderContractType = function(contract) {
      var $container = $('.contract-type-container');

      if (contract.type === CONTRACT_TYPE_EMPLOYEE) {
        $container.find('.grammer').text('an');
        $container.find('.company-type').text('Inc.');
      } else {
        $container.find('.grammer').text('a');
        $container.find('.company-type').text('BV.');
      }

      $container.find('.contract-type').text(contract.type);
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
        var contractType = this.data.contractTypes.find(function(o) {
          return o.country === country
        });

        if (contractType && contractType.factor.hasOwnProperty(CONTRACT_TYPE_EMPLOYEE)) {
          contract.type = CONTRACT_TYPE_EMPLOYEE;
          contract.factor = contractType.factor.employee;
        } else if (contractType) {
          contract.type = CONTRACT_TYPE_CONTRACTOR;
          contract.factor = contractType.factor.contractor;
        } else {
          contract.type = CONTRACT_TYPE_CONTRACTOR;
          contract.factor = 1.17;
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
