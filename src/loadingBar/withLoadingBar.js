import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { connect } from 'react-redux';

// export const mapStateToProps = (state) => {
//   console.log('State is : ', state);
//   return {
//     loadingBar: state.bluerain.loadingBar
//   };
// };

export const mapStateToProps = (state) => {
};

function mapDispatchToProps(dispatch, ownProps) {
  // console.log('ownProps are : ', ownProps);
  return {
    showLoading: () => dispatch(showLoading()),
    hideLoading: () => dispatch(hideLoading())
  };
}

export const withLoadingBar = (component) => {
  const bindedComponent = connect(
    null,
    mapDispatchToProps
  )(component);
  return bindedComponent;
};
