import {
  openSystemNav,
  closeSystemNav,
  toggleSystemNav,
  dockSystemNav,
  undockSystemNav
} from './actions';

export const mapStateToProps = state => ({
  bluerain: state.bluerain
});

export const mapDispatchToProps = (dispatch, ownProps) => {

  const bluerain = ownProps.bluerain;

  bluerain.systemNav.actions.open = () => dispatch(openSystemNav());
  bluerain.systemNav.actions.close = () => dispatch(closeSystemNav());
  bluerain.systemNav.actions.toggle = () => dispatch(toggleSystemNav());
  bluerain.systemNav.actions.dock = () => dispatch(dockSystemNav());
  bluerain.systemNav.actions.undock = () => dispatch(undockSystemNav());

  return {
    bluerain
  };
};
