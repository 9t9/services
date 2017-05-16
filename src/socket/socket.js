import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return state.bluerain.isConnected ;

};
const mapDispatch = () => {
  return null;

};


export const withSocket = (component) => {
  const bindedComponent = connect(
    mapStateToProps,
    mapDispatch
  )(component);
  return bindedComponent;
};
