import React from 'react';
import { NotificationsSystem } from 'reapop/lib/components/NotificationsSystem';
import theme from './theme';

const NotificationsSystemWithConnect = connect((state) => {
    console.log('mapping', state)
  return {
    notifications: state.bluerain.notifications
  };
})(NotificationsSystem);

const Notifications = (props) => {
    return (<NotificationsSystemWithConnect theme={theme} />)
};

export default Notifications;
