import { combineReducers } from 'redux';
import { reducer as notificationsReducer } from 'reapop';
// import { loadingBarReducer } from 'react-redux-loading-bar'
import systemNavReducer from './SystemNav/reducer';

export default combineReducers({
  systemNav: systemNavReducer,
  notifications: notificationsReducer,
  // loadingBar: loadingBarReducer
});
