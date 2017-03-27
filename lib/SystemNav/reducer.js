'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = systemNav;

var _actions = require('./actions');

var _InitialState = require('./InitialState');

var _InitialState2 = _interopRequireDefault(_InitialState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function systemNav() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _InitialState2.default;
  var action = arguments[1];


  var obj = void 0;

  switch (action.type) {

    // Activate/Deactivate
    case _actions.ENABLE_SYSTEM_NAV:
      obj = Object.assign({}, state);
      state.state.disabled = false;
      return obj;

    case _actions.DISABLE_SYSTEM_NAV:
      obj = Object.assign({}, state);
      state.state.disabled = true;
      return obj;

    // Open/Close
    case _actions.OPEN_SYSTEM_NAV:
      obj = Object.assign({}, state);
      state.state.open = true;
      return obj;

    case _actions.CLOSE_SYSTEM_NAV:
      obj = Object.assign({}, state);
      state.state.open = false;
      return obj;

    case _actions.TOGGLE_SYSTEM_NAV:
      var open = true;
      if (state.state.open === true) {
        open = false;
      }

      obj = Object.assign({}, state);
      obj.state.open = open;
      return obj;

    // Docking
    case _actions.DOCK_SYSTEM_NAV:

      obj = Object.assign({}, state);
      state.state.docked = true;
      return obj;

    case _actions.UNDOCK_SYSTEM_NAV:

      obj = Object.assign({}, state);
      state.state.docked = false;
      return obj;

    default:
      return state;
  }
}