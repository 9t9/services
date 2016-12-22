import { 
  OPEN_SYSTEM_NAV,
	CLOSE_SYSTEM_NAV,
	TOGGLE_SYSTEM_NAV,
	DOCK_SYSTEM_NAV,
	UNDOCK_SYSTEM_NAV
} from './actions'

const initialState = {
  bluerainSystemNavIsOpen: false,
  bluerainSystemNavIsDocked: false
}

export default function systemNav(state = initialState, action) {
  switch (action.type) {

		// Open/Close
    case OPEN_SYSTEM_NAV:
      return Object.assign({}, state, {
        bluerainSystemNavIsOpen: true
      })
    case CLOSE_SYSTEM_NAV:
      return Object.assign({}, state, {
        bluerainSystemNavIsOpen: false
      })
    case TOGGLE_SYSTEM_NAV:
			var open;
			if (state.bluerainSystemNavIsOpen === true) {
				open = false;
			} else {
				open = true;
			}
			
      return Object.assign({}, state, {
        bluerainSystemNavIsOpen: open
      })

		// Docking
    case DOCK_SYSTEM_NAV:
      return Object.assign({}, state, {
        bluerainSystemNavIsDocked: true
      })
    case UNDOCK_SYSTEM_NAV:
      return Object.assign({}, state, {
        bluerainSystemNavIsDocked: false
      })   
    default:
      return state
  }
}