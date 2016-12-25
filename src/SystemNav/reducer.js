import {
  OPEN_SYSTEM_NAV,
  CLOSE_SYSTEM_NAV,
  TOGGLE_SYSTEM_NAV,
  DOCK_SYSTEM_NAV,
  UNDOCK_SYSTEM_NAV
} from './actions';

import initialState from '../InitialState';

export default function systemNav(state = initialState, action) {

  let obj;

  switch (action.type) {

	  // Open/Close
    case OPEN_SYSTEM_NAV:
      obj = Object.assign({}, state);
      state.systemNav.state.open = true;
      return obj;

    case CLOSE_SYSTEM_NAV:
      obj = Object.assign({}, state);
      state.systemNav.state.open = false;
      return obj;

    case TOGGLE_SYSTEM_NAV:
      let open = true;
      if (state.systemNav.state.open === true) {
        open = false;
      }

      state.systemNav.state.open = open;
      return obj;

    // Docking
    case DOCK_SYSTEM_NAV:

      obj = Object.assign({}, state);
      state.systemNav.state.docked = true;
      return obj;

    case UNDOCK_SYSTEM_NAV:

      obj = Object.assign({}, state);
      state.systemNav.state.docked = false;
      return obj;

    default:
      return state;
  }
}
