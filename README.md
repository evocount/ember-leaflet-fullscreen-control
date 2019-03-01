[![npm version](https://badge.fury.io/js/ember-leaflet-fullscreen-control.svg)](https://badge.fury.io/js/ember-leaflet-fullscreen-control)

ember-leaflet-fullscreen-control
==============================================================================

Use [leaflet.fullscreen](https://github.com/brunob/leaflet.fullscreen) in Ember with [ember-leaflet](https://ember-leaflet.com) to add a fullscreen button to your maps.



Installation
------------------------------------------------------------------------------

```
ember install ember-leaflet-fullscreen-control
```


Usage
------------------------------------------------------------------------------

```hbs
<LeafletMap …>
  {{!-- … --}}
  <LeafletFullscreenControl />
</LeafletMap>
```

All leaflet.fullscreen are supported (e.g. `<LeafletFullscreenControl @position="topleft" />`). Have a look at the leaflet.fullscreen readme. The enter/exit fullscreen events are not supported, yet.

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
