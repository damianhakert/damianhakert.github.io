(function(global) {
  $(function() {
    $('.js-feature-gallery').each(function(idx, container) {
      new global.FeaturePreviewSelector($(container));
    });
  });

  function FeaturePreviewSelector($container) {
    this.$buttonContainer = $container.find('.js-select-zone-wrap');
    this.$previewContainer = $container.find('.js-selected-feature-image-wrap');

    this.initButtons();
  }

  FeaturePreviewSelector.prototype.initButtons = function() {
    $(this.$buttonContainer).on('click', '.feature-select-zone', this.selectFeature.bind(this));
  };

  FeaturePreviewSelector.prototype.selectFeature = function(e) {
    var selectedId = $(e.currentTarget).data('feature-id');

    this.showSelectedImage(selectedId);
    this.updateButtons(selectedId);
  };

  FeaturePreviewSelector.prototype.showSelectedImage = function(selectedId) {
    this.updateSelectedById(selectedId, this.$previewContainer);
  };

  FeaturePreviewSelector.prototype.updateButtons = function(selectedId) {
    this.updateSelectedById(selectedId, this.$buttonContainer);
  };

  FeaturePreviewSelector.prototype.updateSelectedById = function(selectedId, $container) {
    $container.find('.selected').removeClass('selected');
    $container.find('[data-feature-id="' + selectedId + '"]').addClass('selected');
  };

  global.FeaturePreviewSelector = FeaturePreviewSelector;
})(window.gl || (window.gl = {}));

