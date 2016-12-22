'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.mapDispatchToProps = exports.mapStateToProps = undefined;

var _actions = require('./actions');

var mapStateToProps = exports.mapStateToProps = function mapStateToProps(state, ownProps) {

	var systemNav = ownProps.systemNav || {};

	systemNav.isOpen = state.bluerainSystemNavIsOpen;
	systemNav.isDocked = state.bluerainSystemNavIsDocked;

	return {
		systemNav: systemNav
	};
};

var mapDispatchToProps = exports.mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {

	var systemNav = ownProps.systemNav || {};

	systemNav.open = dispatch((0, _actions.openSystemNav)());
	systemNav.close = dispatch((0, _actions.closeSystemNav)());
	systemNav.toggle = dispatch((0, _actions.toggleSystemNav)());
	systemNav.dock = dispatch((0, _actions.dockSystemNav)());
	systemNav.undock = dispatch((0, _actions.undockSystemNav)());

	return {
		systemNav: systemNav
	};
};