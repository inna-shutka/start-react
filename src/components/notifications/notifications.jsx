import clsx from 'clsx';
import PropTypes from 'prop-types';
import { IconError, IconWarning, IconSuccess  } from '../icons';
import styles from './notifications.module.css';

export const Notification = ({ className, Icon, label, color }) => {
    return (
        <button style={{ backgroundColor: color }} className={clsx(styles.button, className)}>
            <Icon className={styles.icon}></Icon>
            <span className={styles.label}>{label}</span>
        </button>
    );
};

Notification.propTypes = {
    label: PropTypes.string.isRequired,
    Icon: PropTypes.string.isRequired,
    className: PropTypes.string,
};