import withSystemNav from './SystemNav/withSystemNav';
import reducers from './reducers';
import App from './App';
import withNotifications from './Notifications/withNotifications';
import Notifications from './Notifications';
import flashBannerReducers from './redux/reducers';
import { showFlashBanner, hideFlashBanner } from './redux/actions';
import FlashBanner from './components/FlashBanner/FlashBanner';
import LoadingBar from 'react-redux-loading-bar';
import { loadingBarReducer } from 'react-redux-loading-bar';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { withLoadingBar } from './loadingBar/withLoadingBar';
import { socketConnected, socketDisconnected } from './socket/actions';
import { withSocket } from './socket/socket';

export {
  App,
  withSystemNav,
  reducers,
  withNotifications,
  Notifications,
  flashBannerReducers,
  loadingBarReducer,
  showFlashBanner,
  hideFlashBanner,
  FlashBanner,
  LoadingBar,
  showLoading,
  hideLoading,
  withLoadingBar,
  withSocket,
  socketConnected,
  socketDisconnected
};
