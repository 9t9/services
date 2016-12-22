import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './connect';

export default function withSystemNav(Component) {
	return connect(
		mapStateToProps,
		mapDispatchToProps
	)(Component);
}
