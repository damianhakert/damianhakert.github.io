(function(global) {
  $(function() {
    $('.js-feature-gallery').each(function(idx, container) {
      new global.FeaturePreviewSelector($(container));
    });
  });

  function FeaturePreviewSelector($widgetContainer) {
    this.$selectZoneContainer = $widgetContainer.find('.js-select-zone-wrap');
    this.$featurePreviewContainer = $widgetContainer.find('.js-selected-feature-image-wrap');
    this.selectedFeatureId = this.$selectZoneContainer.find('.selected');
    this.nextSelectedFeatureId = null;
    this.ensureCorrectConfiguration();
    this.initSelectZones();
  }

  FeaturePreviewSelector.prototype.ensureCorrectConfiguration = function() {
    this.ensureFeatureIds();
    this.initSelections();
  };

  FeaturePreviewSelector.prototype.ensureFeatureIds = function() {
    this.$selectZoneContainer.find('.feature-select-zone').each(function(idx, elem) {
      var $elem = $(elem);
      var existingId = $elem.data('feature-id');
      if (!existingId) {
        $elem.data('feature-id', idx);
      }
    });
  };

  FeaturePreviewSelector.prototype.initSelections = function() {
    const hasSelectedImage = this.$featurePreviewContainer.find('.selected');
    const hasSelectedClickZone = this.$selectZoneContainer.find('.selected');

    if (!hasSelectedImage && !hasSelectedClickZone) {
      this.$selectZoneContainer.first('.feature-select-zone').addClass('selected');
      this.$featurePreviewContainer.first('.feature-select-zone').addClass('selected');
    }
  };

  FeaturePreviewSelector.prototype.initSelectZones = function() {
    $(this.$selectZoneContainer).on('click', '.feature-select-zone', this.selectFeature.bind(this));
  };

  FeaturePreviewSelector.prototype.selectFeature = function(e) {
    var selectedId = this.nextSelectedFeatureId = $(e.currentTarget).data('feature-id');

    this.showSelectedImage(selectedId);
    this.updateSelectZones(selectedId);
  };

  FeaturePreviewSelector.prototype.showSelectedImage = function(selectedId) {
    this.updateSelectedById(selectedId, this.$featurePreviewContainer);
  };

  FeaturePreviewSelector.prototype.updateSelectZones = function(selectedId) {
    this.updateSelectedById(selectedId, this.$selectZoneContainer);
  };

  FeaturePreviewSelector.prototype.updateSelectedById = function(selectedId, $container) {
    $container.find('.selected').removeClass('selected');
    $container.find('[data-feature-id="' + selectedId + '"]').addClass('selected');
  };

  global.FeaturePreviewSelector = FeaturePreviewSelector;

})(window.gl || (window.gl = {}));

