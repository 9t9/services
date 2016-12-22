import { 
	openSystemNav,
	closeSystemNav,
	toggleSystemNav,
	dockSystemNav,
	undockSystemNav
} from './actions'

export const mapStateToProps = (state, ownProps) => {

	const systemNav = ownProps.systemNav || {};

	systemNav.isOpen = state.bluerainSystemNavIsOpen;
	systemNav.isDocked = state.bluerainSystemNavIsDocked;

  return {
    systemNav
  }
}

export const mapDispatchToProps = (dispatch, ownProps) => {

	const systemNav = ownProps.systemNav || {};

	systemNav.open = dispatch(openSystemNav());
	systemNav.close = dispatch(closeSystemNav());
	systemNav.toggle = dispatch(toggleSystemNav());
	systemNav.dock = dispatch(dockSystemNav());
	systemNav.undock = dispatch(undockSystemNav());
	
  return {
    systemNav
  }
}
