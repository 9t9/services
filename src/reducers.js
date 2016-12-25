import { combineReducers } from 'redux';

import systemNavReducer from './SystemNav/reducer';

export default combineReducers({
  systemNav: systemNavReducer
});
