(function () {
  this.SalaryCalculator = (function() {
    function SalaryCalculator() {
      this.bindElements();
    }

    SalaryCalculator.prototype.bindElements = function() {
      $('.salaryContainer .country').change(this.render.bind(this));
      $('.salaryContainer .city').change(this.render.bind(this));
      $('.salaryContainer .level').change(this.render.bind(this));
      $('.salaryContainer .experience').change(this.render.bind(this));
    }

    SalaryCalculator.prototype.getElementValues = function() {
      var salaryContainer = '.salaryContainer';

      return {
        title: $(salaryContainer).data('title'),
        country: $(salaryContainer + ' .country').val(),
        city: $(salaryContainer + ' .city').val(),
        level: $(salaryContainer + ' .level').val(),
        experience: $(salaryContainer + ' .experience').val()
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
      $('.salaryContainer .amount').text('---');
    }

    SalaryCalculator.prototype.renderSuccess = function(input, numbeo, contractTypes, payscale) {
      var $amountContainer = $('.salaryContainer .amount');
      var levelIndex = parseInt(input.level);
      var experienceFactor = parseFloat(input.experience);

      var benchmark = payscale.find(function(o) {
        return o.title.toLowerCase() === input.title.toLowerCase();
      });

      var location = numbeo.find(function(o) {
        return o.country === input.country && o.city === input.city;
      });

      var contractType = contractTypes.find(function(o) {
        return o.country === input.country;
      }) || { factor: (1 + 1/6) };

      if (!location) {
        //When the city and country combination selected do not exist
        return this.renderError();
      } else if (input.experience === '*') {
        var container = '.salaryContainer .experience';
        var minExp = parseFloat($(container + ' option:nth-child(2)').val());
        var maxExp = parseFloat($(container + ' option:nth-last-child(2)').val());

        var min = this.calculate(benchmark.salary, location.rentIndex, levelIndex, contractType.factor, minExp);
        var max = this.calculate(benchmark.salary, location.rentIndex, levelIndex, contractType.factor, maxExp);
        $amountContainer.text(this.formatAmount(min) + '-' + this.formatAmount(max));
      } else {
        var compensation = this.calculate(benchmark.salary, location.rentIndex, levelIndex, contractType.factor, experienceFactor);
        $amountContainer.text(this.formatAmount(compensation));
      }
    }

    SalaryCalculator.prototype.render = function() {
      var input = this.getElementValues();

      if (input.country !== '' && input.city !== '' &&
          input.level != '' && input.experience != '') {

        $.when(this.getData())
          .then(this.renderSuccess.bind(this, input),
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
