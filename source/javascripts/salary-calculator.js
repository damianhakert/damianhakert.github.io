(function () {
  var salaryContainer = '.salary-container';
  var compensationAmount = salaryContainer + ' .compensation .amount';
  var compensationTitle = salaryContainer + ' .compensation .title';
  var defaultValue = '--';

  this.SalaryCalculator = (function() {
    function SalaryCalculator() {
      this.bindElements();
    }

    SalaryCalculator.prototype.bindElements = function() {
      var $countryDropdown = $(salaryContainer + ' .country li');
      var $cityDropdown = $(salaryContainer + ' .city li');
      var $levelDropdown = $(salaryContainer + ' .level li');
      var $experienceDropdown = $(salaryContainer + ' .experience li');

      // Set selected dropdown value
      $countryDropdown.click('.country', this.setDropdown);
      $cityDropdown.click('.city', this.setDropdown);
      $levelDropdown.click('.level', this.setDropdown);
      $experienceDropdown.click('.experience', this.setDropdown);

      // Unlock and filter city dropdown
      $countryDropdown.click(this.filterCityDropdown.bind(this));
      $countryDropdown.click(this.resetCityDropdown.bind(this));

      // Render compensation
      $countryDropdown.click(this.render.bind(this));
      $cityDropdown.click(this.render.bind(this));
      $levelDropdown.click(this.render.bind(this));
      $experienceDropdown.click(this.render.bind(this));

      // Render Formula
      $levelDropdown.click(this.renderFormula.bind(this));
      $experienceDropdown.click(this.renderFormula.bind(this));

    }

    // Dropdown Core functionality

    SalaryCalculator.prototype.setDropdown = function(event) {
      var key = $(this).find('.key').text();
      var value = $(this).find('.value').text();
      var displayValue = $(this).find('.display-value').text();
      var $title = $(salaryContainer + ' ' + event.data + ' .title');
      var $subtitle = $(salaryContainer + ' ' + event.data + ' .subtitle');

      $title.text(key);
      $title.data('selected', value ? value : key);

      if (value) {
        $subtitle.text(value);
      } else if (displayValue) {
        $subtitle.text(displayValue);
      }
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
      $cityDropdownBtn.removeClass('disabled');
      $cityDropdownBtn.find('.title').text('City');
      $cityDropdownBtn.find('.title').data('selected', '');
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

      if (input.country && input.city && input.level && input.experience) {

        function renderData() {
          this.renderCompensation(input);
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

      } else {
        this.renderInvalidCompensation();
      }
    }

    SalaryCalculator.prototype.renderCompensation = function(input) {
      var numbeo = this.data.numbeo;
      var contracts = this.data.contractTypes;

      var levelIndex = parseInt(input.level, 10);
      var experienceFactor = parseFloat(input.experience);
      var benchmark = input.salary;

      var rentIndex = this.calculateRentIndex(input.city, input.country)

      if (!rentIndex) {
        //When the city and country combination selected do not exist
        return this.renderInvalidCompensation();
      }

      var contract = this.calculateContractType(input.country);
      this.renderContractType(contract);

      if (input.experience === '0.8 to 1.2') {
        var container = salaryContainer + ' .experience';
        var min = this.calculateCompensation(benchmark, rentIndex, levelIndex, contract.factor, 0.8);
        var max = this.calculateCompensation(benchmark, rentIndex, levelIndex, contract.factor, 1.2);
        $(compensationAmount).text(this.formatAmount(min) + ' - ' + this.formatAmount(max) + ' USD');
        $(compensationTitle).text('Estimated Range');
      } else {
        var compensation = this.calculateCompensation(benchmark, rentIndex, levelIndex, contract.factor, experienceFactor);
        $(compensationAmount).text(this.formatAmount(compensation) + ' USD');
        $(compensationTitle).text('Estimated Compensation');
      }
    }

    SalaryCalculator.prototype.renderContractType = function(contract) {
      var $container = $('.contract-type-container');
      if (contract.hasOwnProperty('type') && contract.type.toLowerCase() === 'employee') {
        $container.find('.grammer').text('an');
        $container.find('.contract-type').text('employee');
        $container.find('.company-type').text('Inc.');
      } else {
        $container.find('.grammer').text('a');
        $container.find('.contract-type').text('contractor');
        $container.find('.company-type').text('BV.');
      }
    }

    SalaryCalculator.prototype.renderFormula = function() {
      var values = this.getElementValues();
      $('.formula .level .value').text(values.level ? values.level : defaultValue);
      $('.formula .experience .value').text(values.experience ? values.experience : defaultValue);

      var rentIndex = this.calculateRentIndex(values.city, values.country);
      var contractType = this.calculateContractType(values.country);
      $('.formula .rentIndex .value').text(rentIndex ? rentIndex : defaultValue);
      $('.formula .contractType .value').text(contractType ? contractType.factor.toFixed(2) : defaultValue);
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
        experience: $(salaryContainer + ' .experience .title').data('selected') || ''
      }
    }

    SalaryCalculator.prototype.calculateRentIndex = function(city, country) {
      if (this.data && this.data.numbeo) {
        var locationData = this.data.numbeo.find(function(o) {
          return o.country === country && o.city === city;
        });

        return locationData ? locationData.rentIndex : 0;
      }

      return 0;
    }

    SalaryCalculator.prototype.calculateContractType = function(country) {
      if (this.data && this.data.contractTypes) {
        return this.data.contractTypes.find(function(o) {
          return o.country === country;
        }) || { factor: (1 + 1/6) };
      }

      return 0;
    }

    SalaryCalculator.prototype.calculateCompensation = function(benchmark, rentIndex, levelIndex, contractType, experienceFactor) {
      return Math.round(benchmark * ((rentIndex)/100 + 0.25) * ((levelIndex + 4)/5) * contractType * experienceFactor)
    };

    SalaryCalculator.prototype.formatAmount = function(amount) {
      return '$' + amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return SalaryCalculator;
  })();

  new SalaryCalculator();
})();
