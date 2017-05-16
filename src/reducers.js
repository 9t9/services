import { combineReducers } from 'redux';
import { reducer as notificationsReducer } from 'reapop';
// import { loadingBarReducer } from 'react-redux-loading-bar'
import systemNavReducer from './SystemNav/reducer';
import socketReducer from './socket/reducer';

export default combineReducers({
  systemNav: systemNavReducer,
  notifications: notificationsReducer,
  isConnected: socketReducer,
  // loadingBar: loadingBarReducer
});
