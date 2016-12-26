import React from 'react';
import { connect } from 'react-redux';
import { addNotification, updateNotification, removeNotification } from 'reapop';

export default function withNotifications(Component) {
	return connect(null, {
		addNotification,
		updateNotification,
		removeNotification
	})(Component);
}
