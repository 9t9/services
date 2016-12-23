import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './connect';
import initailState from '../InitialState';

export default function withSystemNav(Component) {

	const bluerain = initailState;

	const WithSystemNavComponent =  connect(
		mapStateToProps,
		mapDispatchToProps
	)(Component);

	return (props) => (<WithSystemNavComponent bluerain={bluerain} {...props} />)
}

