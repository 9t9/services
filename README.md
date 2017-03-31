# BlueRain Client Services


## How to use Flash Banner
First add css to your index file by
```import 'bluerain-client-services/dist/style.css';```

Add FlashBanner component to your system level component, and make its connection with your local store, also pass your store to banner component
```import { FlashBanner } from 'bluerain-client-services';
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

```import { flashBannerReducers } from 'bluerain-client-services';

const store = createStore(
  combineReducers({
    flashBanner: flashBannerReducers,
  }),
  )
);```

Import the showFlashBanner action from client Services and dispatch the action to your store
```import { showFlashBanner } from 'bluerain-client-services';

store.dispatch(showFlashBanner());```
