# BlueRain Client Services
**IMPORTANT!!** First add css to your index file by

```
import 'bluerain-client-services/dist/style.css';
```

## How to use Flash Banner

Add FlashBanner component to your system level component, and make its connection with your local store, also pass your store to banner component
```
import { FlashBanner } from 'bluerain-client-services';
import { connect } from 'react-redux';

class Layout extends React.Component {
  constructor(props) {
    super(props);

    // Set the state of the flash banner passed by store
    this.state = {
      show: props.showFlashBanner,
    }
  }
  // If any change made to flash banner, It will change the state of the flash banner
  componentWillReceiveProps(nextProps) {
    this.setState({
      show: nextProps.showFlashBanner
    });
  }

  render() {
    const { show } = this.state;
    return (
      <div>
        <FlashBanner show={show} showClose store={store} />
        {this.props.children}
      </div>
    );
  }
}


// make a connection of your component with the store
const mapStateToProps = (state) => {
  return {
    showFlashBanner: state.flashBanner.show
  };
};
const ConnectedLayout = connect(
  mapStateToProps,
)(Layout);

export default ConnectedLayout;
```
configure flash banner reducers with your store, for this pupose you have to import flashBannerReducers from bluerain-client-services and combine its reducers with your store like

```
import { flashBannerReducers } from 'bluerain-client-services';

const store = createStore(
  combineReducers({
    flashBanner: flashBannerReducers,
  }),
  )
);
```
Import the showFlashBanner action from client Services and dispatch the action to your store
```
import { showFlashBanner } from 'bluerain-client-services';
dispatch(showFlashBanner());
```
---
## How to use Loading Bar

Add loadingBar component to your system level component

```
import { LoadingBar } from 'bluerain-client-services';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <LoadingBar />
       </header>
    )
  }
}
```

configure LoadingBar reducers with your store, for this pupose you have to import loadingBarReducer from bluerain-client-services and combine its reducers with your store like

```
import { loadingBarReducer } from 'bluerain-client-services';

const store = createStore(
  combineReducers({
    loadingBar: loadingBarReducer,
  }),
  )
);
```


Import the showLoading action from client Services and dispatch the action to your store
```
import { showLoading, hideLoading } from 'bluerain-client-services';

dispatch(showLoading())
// do long running stuff
dispatch(hideLoading());
```
Or you can simply map the loading bar actions to your component by
```
import { withLoadingBar } from 'bluerain-client-services';

export default withLoadingBar(YourComponent);
```
then simply call
```
this.props.showLoading(); // To show loading bar
```
and
```
this.props.hideLoading(); // To hide loading bar
```
---
## How to check whether server is connected or not
To check whether server is connected or not and sockets are active, import the withSocket function and wrap your component in it

```
import { withSocket } from 'bluerain-client-services';

// Your component

export default withSocket(Component);
```
you will get the prop isConnected in your component
```
isConnected : true // server connected
isConnected: false // server not connected
```
