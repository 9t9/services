'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var initialState = {
  show: false
};

var flashBannerReducers = function flashBannerReducers() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {

    case 'SHOW_FLASH_BANNER':
      return _extends({}, state, {
        show: action.show
      });

    case 'HIDE_FLASH_BANNER':
      return _extends({}, state, {
        show: action.show
      });

    default:
      return state;
  }
};

exports.default = flashBannerReducers;