'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = withSystemNav;

var _reactRedux = require('react-redux');

var _connect = require('./connect');

function withSystemNav(Component) {
	return (0, _reactRedux.connect)(_connect.mapStateToProps, _connect.mapDispatchToProps)(Component);
}