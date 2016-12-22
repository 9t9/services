'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = systemNav;

var _actions = require('./actions');

var initialState = {
  bluerainSystemNavIsOpen: false,
  bluerainSystemNavIsDocked: false
};

function systemNav() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {

    // Open/Close
    case _actions.OPEN_SYSTEM_NAV:
      return Object.assign({}, state, {
        bluerainSystemNavIsOpen: true
      });
    case _actions.CLOSE_SYSTEM_NAV:
      return Object.assign({}, state, {
        bluerainSystemNavIsOpen: false
      });
    case _actions.TOGGLE_SYSTEM_NAV:
      var open;
      if (state.bluerainSystemNavIsOpen === true) {
        open = false;
      } else {
        open = true;
      }

      return Object.assign({}, state, {
        bluerainSystemNavIsOpen: open
      });

    // Docking
    case _actions.DOCK_SYSTEM_NAV:
      return Object.assign({}, state, {
        bluerainSystemNavIsDocked: true
      });
    case _actions.UNDOCK_SYSTEM_NAV:
      return Object.assign({}, state, {
        bluerainSystemNavIsDocked: false
      });
    default:
      return state;
  }
}