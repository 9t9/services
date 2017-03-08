'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _NotificationsSystem = require('reapop/lib/components/NotificationsSystem');

var _reapopThemeWybo = require('reapop-theme-wybo');

var _reapopThemeWybo2 = _interopRequireDefault(_reapopThemeWybo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotificationsSystemWithConnect = (0, _reactRedux.connect)(function (state) {
  return {
    notifications: state.bluerain.notifications
  };
})(_NotificationsSystem.NotificationsSystem);

var Notifications = function Notifications(props) {
  return _react2.default.createElement(NotificationsSystemWithConnect, { theme: _reapopThemeWybo2.default });
};

exports.default = Notifications;