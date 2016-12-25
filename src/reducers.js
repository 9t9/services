import { combineReducers } from 'redux';
import {reducer as notificationsReducer} from 'reapop';

import systemNavReducer from './SystemNav/reducer';

export default combineReducers({
  systemNav: systemNavReducer,
  notifications: notificationsReducer
});
