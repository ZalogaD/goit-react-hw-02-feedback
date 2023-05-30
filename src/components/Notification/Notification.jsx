import { NotificationCont, NotificationMes } from './Notification.styled';
import PropTypes from 'prop-types';

const Notification = ( {message} ) => {
  return (
    <NotificationCont>
      <NotificationMes>{message}</NotificationMes>
    </NotificationCont>
    );
};

Notification.propTypes = {
    message: PropTypes.string.isRequired
};

export default Notification;