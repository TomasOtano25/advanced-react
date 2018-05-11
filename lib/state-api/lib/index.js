'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var _createClass = (function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ('value' in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as afunction');
  }
}

var DataApi = (function() {
  function DataApi(rawData) {
    _classCallCheck(this, DataApi);

    this.rawData = rawData;
  }

  /*acc = acumulador curr = elemento actual */

  _createClass(DataApi, [
    {
      key: 'mapIntoObject',
      value: function mapIntoObject(arr) {
        return arr.reduce(function(acc, curr) {
          acc[curr.id] = curr;
          return acc;
        }, {});
      },
    },
    {
      key: 'getArticles',
      value: function getArticles() {
        return this.mapIntoObject(this.rawData.articles);
      },
    },
    {
      key: 'getAuthors',
      value: function getAuthors() {
        return this.mapIntoObject(this.rawData.authors);
      },
    },
  ]);

  return DataApi;
})();

exports.default = DataApi;
