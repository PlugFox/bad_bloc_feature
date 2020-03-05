define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var transformers = Object.create(dart.library);
  const CT = Object.create(null);
  dart.trackLibraries("packages/rxdart/transformers", {
    "package:rxdart/transformers.dart": transformers
  }, {
  }, '{"version":3,"sourceRoot":"","sources":[],"names":[],"mappings":"","file":"transformers.ddc.js"}');
  // Exports:
  return {
    transformers: transformers
  };
});

//# sourceMappingURL=transformers.ddc.js.map
