(function () {
  var salaryContainer = '.salary-container';
  var compensationAmount = salaryContainer + ' .compensation .amount';
  var compensationTitle = salaryContainer + ' .compensation .title';
  var contractorFactor = (1 + 1/6);

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

      // Render compensation
      $countryDropdown.click(this.render.bind(this));
      $cityDropdown.click(this.render.bind(this));
      $levelDropdown.click(this.render.bind(this));
      $experienceDropdown.click(this.render.bind(this));
    }

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

    SalaryCalculator.prototype.getElementValues = function() {
      return {
        title: $(salaryContainer).data('title'),
        country: $(salaryContainer + ' .country .title').data('selected'),
        city: $(salaryContainer + ' .city .title').data('selected'),
        level: $(salaryContainer + ' .level .title').data('selected'),
        experience: $(salaryContainer + ' .experience .title').data('selected')
      }
    }

    SalaryCalculator.prototype.getData = function() {
      var deferred = jQuery.Deferred();

      $.get('/salary/data.json').then(function(data) {
        deferred.resolve(data.numbeo, data.contractTypes, data.payscale);
      });

      return deferred.promise();
    }

    SalaryCalculator.prototype.renderError = function() {
      $(compensationAmount).text('--');
    }

    SalaryCalculator.prototype.renderContractType = function(factor) {
      var $contractType = $('.salary-contract-type');
      if (factor === contractorFactor) {
        $contractType.find('span').text('a');
        $contractType.find('strong').text('contractor');
      } else {
        $contractType.find('span').text('an');
        $contractType.find('strong').text('employee');
      }
    }

    SalaryCalculator.prototype.renderCompensation = function(input, numbeo, contractTypes, payscale) {
      var levelIndex = parseInt(input.level);
      var experienceFactor = parseFloat(input.experience);

      var benchmark = payscale.find(function(o) {
        return o.title.toLowerCase() === input.title.toLowerCase();
      });

      var location = numbeo.find(function(o) {
        return o.country === input.country && o.city === input.city;
      });

      if (!location) {
        //When the city and country combination selected do not exist
        return this.renderError();
      }

      var contractType = contractTypes.find(function(o) {
        return o.country === input.country;
      }) || { factor: (1 + 1/6) };

      this.renderContractType(contractType.factor);

      if (input.experience === '0.8 - 1.2') {
        var container = salaryContainer + ' .experience';
        var min = this.calculate(benchmark.salary, location.rentIndex, levelIndex, contractType.factor, 0.8);
        var max = this.calculate(benchmark.salary, location.rentIndex, levelIndex, contractType.factor, 1.2);
        $(compensationAmount).text(this.formatAmount(min) + ' - ' + this.formatAmount(max));
        $(compensationTitle).text('Compensation Range');
      } else {
        var compensation = this.calculate(benchmark.salary, location.rentIndex, levelIndex, contractType.factor, experienceFactor);
        $(compensationAmount).text(this.formatAmount(compensation));
        $(compensationTitle).text('Estimated Compensation');
      }
    }

    SalaryCalculator.prototype.render = function() {
      var input = this.getElementValues();

      if (input.country !== undefined && input.city !== undefined &&
          input.level != undefined && input.experience != undefined) {

        $.when(this.getData()).then(this.renderCompensation.bind(this, input),
          this.renderError.bind(this));

      } else {
        this.renderError();
      }
    }

    SalaryCalculator.prototype.calculate = function(benchmark, rentIndex, levelIndex, contractType, experienceFactor) {
      return Math.round(benchmark * ((rentIndex)/100 + 0.25) * ((levelIndex + 4)/5) * contractType * experienceFactor)
    };

    SalaryCalculator.prototype.formatAmount = function(amount) {
      return '$' + amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return SalaryCalculator;
  })();

  new SalaryCalculator();
})();
