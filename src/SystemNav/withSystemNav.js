import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './connect';
import initialState from '../InitialState';

export default function withSystemNav(Component) {

	const bluerain = initialState;

	const WithSystemNavComponent =  connect(
		mapStateToProps,
		mapDispatchToProps
	)(Component);

	return (props) => (<WithSystemNavComponent bluerain={bluerain} {...props} />);
}

