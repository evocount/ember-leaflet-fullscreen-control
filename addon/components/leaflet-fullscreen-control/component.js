import BaseLayer from 'ember-leaflet/components/base-layer';

class LeafletFullscreenControl extends BaseLayer {
  leafletOptions = [
    'position',
    'title',
    'titleCancel',
    'content',
    'forceSeparateButton',
    'forcePseudoFullscreen',
    'fullscreenElement'
  ];

  addToContainer() {
    this.parentComponent._layer.addControl(this._layer);
  }

  removeFromContainer() {
    this.parentComponent._layer.removeControl(this._layer);
  }

  createLayer() {
    return new this.L.Control.FullScreen(...this.requiredOptions, this.options);
  }
}

export default LeafletFullscreenControl;
