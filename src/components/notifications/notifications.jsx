import clsx from 'clsx';
import PropTypes from 'prop-types';
import { IconError, IconWarning, IconSuccess  } from '../icons';
import styles from './notifications.module.css';

const icons = {
  warning: IconWarning,
  success: IconSuccess,
  error: IconError
};

export const Notification = ({ className, Icon, label, color }) => {
    return (
        <button className={clsx(styles.button, styles[type], className)}>
            <Icon className={styles.icon}></Icon>
            <span className={styles.label}>{children}</span>
        </button>
    );
};

Notification.propTypes = {
    label: PropTypes.string.isRequired,
    Icon: PropTypes.string.isRequired,
    className: PropTypes.string,
};