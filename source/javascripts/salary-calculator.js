(function () {
  $('.formula').after('<div class="generate-url"></div>')

  var paramsFetcher = function() {
    var regex = /[?&]([^=#]+)=([^&#]*)/g;
    var params = {};
    var match = '';

    while(match = regex.exec(window.location.href)) {
      params[match[1]] = match[2];
    }

    return (Object.keys(params).length > 0) ? params : null;
  };

  var experienceKey = {
    0: { min: 0.8, max: 1.2, text: 'Experience range' },
    1: { min: 0.8, max: 0.9, text: 'Little experience' },
    2: { min: 0.9, max: 1.0, text: 'Below average experience' },
    3: { min: 1.0, max: 1.1, text: 'Above average experience' },
    4: { min: 1.1, max: 1.2, text: 'A lot of experience' }
  };

  var levelKey = {
    Junior: 0.8,
    Intermediate: 1.0,
    Senior: 1.2,
    Lead: 1.4,
    0.8: 'Junior',
    1: 'Intermediate',
    1.2: 'Senior',
    1.4: 'Lead'
  };

  var cityStateParser = function(validParams, params, param) {
    var cityState = params[param];

    var complexCityState = function() {
      var state = ", " + cityState.split("_")[1];
      var city = cityState.split("_")[0];
      validParams[param] = city.split("-").join(" ") + state;
    };

    var simpleCityState = function() {
      validParams[param] = cityState.split("-").join(" ");
    };

    (cityState.indexOf("_") >= 0) ? complexCityState() : simpleCityState();
  };

  var paramsParser = function(params) {
    if (!params) return null;
    var validParams = {};

    Object.keys(params).forEach(function(param) {
      switch (param) {
        case "city":
          return cityStateParser(validParams, params, param);
        case "country":
          var state = params[param];
          return validParams[param] = state.split("-").join(" ");
        case "experience":
          return validParams["experience"] = experienceKey[
            parseFloat(params[param])
          ];
        case "level":
          return validParams['level'] = levelKey[params[param]];
        case "low":
          return validParams['low'] = parseInt(params[param])
        case "high":
          return validParams['high'] = parseInt(params[param])
        default:
          return null;
      }
    });

    var defaultSalary = $('.salary-container').data('salary');

    validParams['salary'] = parseFloat(defaultSalary);

    var paramsLength = Object.keys(validParams).length

    if (paramsLength > 0 && paramsLength < 5) {
      $('.generate-url').html('<h4 class="alert alert-warning">Not enough parameters were provided</h4>')
      return null
    }

    return paramsLength > 4 ? validParams : null;
  };

  var salaryContainer = '.salary-container';
  var compensationAmount = salaryContainer + ' .compensation .amount';
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
    function SalaryCalculator(params) {
      this.bindEvents();

      this.params = params;

      if (this.params) {
        this.render(this.params);
      }
    }

    SalaryCalculator.prototype.bindEvents = function() {
      var $countryDropdown = $(salaryContainer + ' .country li:not(.filter-container)');
      var $countryDropdownContainer = $(salaryContainer + ' .country');
      var $cityDropdown = $(salaryContainer + ' .city li:not(.filter-container)');
      var $cityDropdownContainer = $(salaryContainer + ' .city');
      var $levelDropdown = $(salaryContainer + ' .level li');
      var $levelDropdownContainer = $(salaryContainer + ' .level');
      var $experienceDropdown = $(salaryContainer + ' .experience li');
      var $experienceDropdownContainer = $(salaryContainer + ' .experience');
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
      $levelDropdownContainer.on('keydown', this.highlightDropdownItem.bind(this));
      $experienceDropdownContainer.on('keydown', this.highlightDropdownItem.bind(this));

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

    SalaryCalculator.prototype.focusInput = function(e) {
      $(e.target).find('.filter-input').focus();
    }

    SalaryCalculator.prototype.search = function(data, e) {
      var text = e.target.value.toLowerCase();
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

    SalaryCalculator.prototype.render = function(params) {
      // if params is an event then make params false so that values equals what it should
      if (params && params.type) params = false;
      var input = params || this.getElementValues();

      function renderData() {
        if (input.country && input.city && input.level && input.experience.min && input.experience.max) {
          this.renderCompensation(input);
        } else {
          this.renderInvalidCompensation();
        }
        this.renderFormula(input);
        this.renderContractType(input);
      }

      if (this.data) {
        renderData.call(this);
      } else {
        $.when(this.getData()).then(function() {
            renderData.call(this);
            if (this.params) this.setElementValues();
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
      var marketAdjustment = this.calculateMarketAdjustment(input.city, input.country);
      var contract = this.calculateContractFactor(input.country);

      if (!rentIndex) {
        //When the city and country combination selected do not exist
        return this.renderInvalidCompensation();
      }

      var min = this.calculateCompensation(benchmark, rentIndex, marketAdjustment, levelIndex, contract.factor, input.experience.min);
      var max = this.calculateCompensation(benchmark, rentIndex, marketAdjustment, levelIndex, contract.factor, input.experience.max);

      var calculatedTrue = (min && max);

      var valid;
      if (this.params) {
        var paramsExpTotal = this.params.low + this.params.high;
        var calculatedExpTotal = min + max;

        if (paramsExpTotal === calculatedExpTotal) {
          valid = true;
        } else {
          valid = false;
        }
      } else {
        // error message won't render if starting from scratch
        valid = true;
      }

      if (calculatedTrue) {
        $(compensationAmount).text(this.formatAmount(min) + ' - ' + this.formatAmount(max) + ' USD');
        this.renderCompensationUrl(input, { min: min, max: max }, valid);
      }
    }

    SalaryCalculator.prototype.renderCompensationUrl = function(input, salary, valid) {
      var nonMatchError = function(valid) {
        return !valid
          ? '<h4 class="alert alert-warning">The salary provided does not match the salary calculated</h4>'
          : '';
      }

      var rootUrl = function() {
        var url = window.location.href;
        if (url.indexOf('?') >= 0) {
          url = url.split("?")[0];
        }
        return url;
      }

      var experience = function() {
        var experienceIndex;
        // keys on experienceKey to match
        [0, 1, 2, 3, 4]
          .forEach(function(idx) {
            var min = (parseFloat(input.experience.min) === experienceKey[idx].min);
            var max = (parseFloat(input.experience.max) === experienceKey[idx].max);
            if (min && max) experienceIndex = idx;
          });

        return experienceIndex;
      };

      // keys on levelKey to match
      var levelNumber = function() {
        return [0.8, 1.0, 1.2, 1.4]
          .map(function(key) {
            var valid = (parseFloat(input.level) === parseFloat(key));
            if (valid) return levelKey[parseFloat(key)];
            return null;
          })
          .find(function(level) {
            return level !== null;
          });
      };

      var city = function() {
        var parseCity = input.city.split(", ").join("_");
        return parseCity.split(" ").join("-");
      }

      var country = function() {
        var parseCountry = input.country.split(", ").join("_");
        return parseCountry.split(" ").join("-");
      }

      var link = function() {
        return rootUrl() + '?city=' + city() + '&country=' + country()
          + '&experience=' + experience() + '&level=' + levelNumber()
          + '&low=' + salary.min + '&high=' + salary.max;
      }

      var copySection = function(valid) {
        $('.generate-url').html(
          '<div><h4>Share compensation url - '
          + '<a style="cursor: pointer;" class="copy-me" data-clipboard-text="' + link() + '"'
          + 'data-placement="top">Copy Link</a>'
          + nonMatchError(valid)
          + '</h4><input style="cursor: default;" class="comp-url form-control" value="'
          + link() + '"disabled="true">'
          + '</input></div><br>'
        );
      };

      copySection(valid);
      new Clipboard('.copy-me');

      $(document).on('click', '.copy-me', function(e) {
        setTimeout(function() {
          e.target.parentElement.innerHTML = 'Share compensation url - Copied!'
          setTimeout(function() {
            copySection(valid);
          }, 3000);
        }, 100);
      })
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

    SalaryCalculator.prototype.renderFormula = function(params) {
      // if params is an event then make params false so that values equals what it should
      if (params && params.type) params = false;
      var values = params || this.getElementValues();
      var rentIndex = this.calculateRentIndex(values.city, values.country);
      var marketAdjustment = this.calculateMarketAdjustment(values.city, values.country);
      var contract = this.calculateContractFactor(values.country);
      var experience = values.experience;

      $('.formula .level .value').text(values.level ? values.level : defaultValue);
      $('.formula .experience .value').text(experience.min && experience.max ? experience.min + ' to ' + experience.max : defaultValue);

      $('.formula .rentIndex .value').text(rentIndex ? rentIndex : defaultValue);
      $('.formula .marketAdjustment .value').text(rentIndex ? marketAdjustment : defaultValue);
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

    SalaryCalculator.prototype.setElementValues = function() {
      var params = this.params;

      $(salaryContainer + ' .country .title').text(params.country || '--');
      $(salaryContainer + ' .country .title').data().selected = params.country;
      $(salaryContainer + ' .city .title').text(params.city || '--');
      $(salaryContainer + ' .city .title').data().selected = params.city;

      var city = this.data.numbeo.find(function(data) {
        return data.city === params.city
      });

      $(salaryContainer + ' .city .subtitle').text(parseFloat((city.rentIndex * 0.01).toFixed(2)));
      $(salaryContainer + ' .city .dropdown-menu-toggle').removeClass('disabled');

      var dataSelected = (params.experience.min === 1.0 ? "1.0" : params.experience.min) + " to " + params.experience.max;
      $(salaryContainer + ' .experience .title').text(params.experience.text);
      $(salaryContainer + ' .experience .subtitle').text(dataSelected);
      $(salaryContainer + ' .experience .title').data('min', params.experience.min);
      $(salaryContainer + ' .experience .title').data('max', params.experience.max);
      $(salaryContainer + ' .experience .title').data('selected', dataSelected);

      $(salaryContainer).data('salary', params.salary)

      $(salaryContainer + ' .level .title').data('selected', params.level);
      $(salaryContainer + ' .level .subtitle').text(params.level);
      $(salaryContainer + ' .level .title').text(levelKey[params.level]);
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

    SalaryCalculator.prototype.calculateMarketAdjustment = function(city, country) {
      if (this.data && this.data.numbeo) {
        var locationData = this.data.marketAdjustments.find(function(o) {
          return o.country === country && o.city === city;
        });

        return locationData ? parseFloat((locationData.hotmarket * 0.01).toFixed(2)) : 0;
      }

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

    SalaryCalculator.prototype.calculateCompensation = function(benchmark, rentIndex, marketAdjustment, levelIndex, contractType, experienceFactor) {
      return Math.round(benchmark * (rentIndex + marketAdjustment + 0.25) * levelIndex * contractType * experienceFactor);
    };

    SalaryCalculator.prototype.formatAmount = function(amount) {
      return '$' + amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return SalaryCalculator;
  })();

  var urlParams = paramsFetcher();
  var parsedParams = paramsParser(urlParams);

  if (parsedParams) {
    new SalaryCalculator(parsedParams);
  } else {
    new SalaryCalculator(null);
  }
})();
