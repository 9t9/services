import React from 'react';
import { connect } from 'react-redux';
import { NotificationsSystem } from 'reapop/lib/components/NotificationsSystem';
import theme from 'reapop-theme-wybo';

const NotificationsSystemWithConnect = connect(state => ({
  notifications: state.bluerain.notifications
}))(NotificationsSystem);

const Notifications = props => (<NotificationsSystemWithConnect theme={theme} />);

export default Notifications;
