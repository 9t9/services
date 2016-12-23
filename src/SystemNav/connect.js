import { 
	openSystemNav,
	closeSystemNav,
	toggleSystemNav,
	dockSystemNav,
	undockSystemNav
} from './actions'

export const mapStateToProps = (state, ownProps) => {
	// console.log('mapStateToProps state', state);
	// console.log('mapStateToProps ownProps', ownProps.bluerain);

	const bluerain = ownProps.bluerain;
	bluerain.systemNav = state.bluerain.systemNav;

	// console.log('state', state)
	// console.log('state', state.bluerainSystemNavIsDocked)

  return {
    bluerain
  }
}

export const mapDispatchToProps = (dispatch, ownProps) => {

	const bluerain = ownProps.bluerain;
	
	bluerain.systemNav.actions.open = () => dispatch(openSystemNav());
	bluerain.systemNav.actions.close = () => dispatch(closeSystemNav());
	bluerain.systemNav.actions.toggle = () => dispatch(toggleSystemNav());
	bluerain.systemNav.actions.dock = () => dispatch(dockSystemNav());
	bluerain.systemNav.actions.undock = () => dispatch(undockSystemNav());
	console.log('mapDispatchToProps', bluerain);
	
  return {
    bluerain
  }
}
