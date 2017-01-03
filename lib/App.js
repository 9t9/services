'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash.kebabcase');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
  function App(opts) {
    _classCallCheck(this, App);

    opts = opts || {};

    if (!opts.name) {
      throw new Error('App name not given.');
    }
    this.name = opts.name;

    if (!opts.packageName) {
      throw new Error("App doesn't have a packagename in the packageName property");
    }
    this.packageName = opts.packageName;

    if (!opts.slug) {
      opts.slug = opts.name;
    }

    this.slug = (0, _lodash2.default)(opts.slug);

    this.description = opts.description;
    this.icons = opts.icons;
    this.version = opts.version;

    if (opts.routes) {
      this.routes = opts.routes;
      this.routes.path = this.slug;
    }
  }

  _createClass(App, [{
    key: 'getRootPath',
    value: function getRootPath() {
      return '/app/' + this.slug;
    }
  }]);

  return App;
}();

// export function withApp(Component) {

//   // const app = app();

//   const WithAppComponent = (props) => (<Component app={app} {...props} />);

//   return WithAppComponent;
// }


exports.default = App;