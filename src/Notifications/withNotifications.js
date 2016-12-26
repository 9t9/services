import React from 'react';
import { connect } from 'react-redux';
import { addNotification, updateNotification, removeNotification } from 'reapop';

export default function withNotifications(Component) {
	return connect(null, {
		addNotification,
		updateNotification,
		removeNotification
	})(Component);
	// return connect((state) => {
	// 	console.log('map state', state)
	// 	return {};
	// }, (dispatch, ownProps) => {
	// 	console.log('here')
	// 	return {
	// 		notify
	// 	}
	// })(Component);
}

