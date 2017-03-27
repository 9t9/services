'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = withNotifications;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reapop = require('reapop');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function withNotifications(Component) {
	return (0, _reactRedux.connect)(null, {
		addNotification: _reapop.addNotification,
		updateNotification: _reapop.updateNotification,
		removeNotification: _reapop.removeNotification
	})(Component);
}