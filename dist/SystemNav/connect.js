'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapDispatchToProps = exports.mapStateToProps = undefined;

var _actions = require('./actions');

var mapStateToProps = exports.mapStateToProps = function mapStateToProps(state) {
  return {
    systemNav: state.bluerain.systemNav
  };
};

var mapDispatchToProps = exports.mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {

  var systemNav = ownProps.systemNav;
  systemNav.actions = {};

  systemNav.actions.enable = function () {
    return dispatch((0, _actions.enableSystemNav)());
  };
  systemNav.actions.disable = function () {
    return dispatch((0, _actions.disableSystemNav)());
  };
  systemNav.actions.open = function () {
    return dispatch((0, _actions.openSystemNav)());
  };
  systemNav.actions.close = function () {
    return dispatch((0, _actions.closeSystemNav)());
  };
  systemNav.actions.toggle = function () {
    return dispatch((0, _actions.toggleSystemNav)());
  };
  systemNav.actions.dock = function () {
    return dispatch((0, _actions.dockSystemNav)());
  };
  systemNav.actions.undock = function () {
    return dispatch((0, _actions.undockSystemNav)());
  };

  return {
    systemNav: systemNav
  };
};