import clsx from 'clsx';
import PropTypes from 'prop-types';
import {IconWarning, IconSuccess, IconError} from '../icons';
import styles from './notifications.module.css';

const icons = {
    warning: IconWarning,
    success: IconSuccess,
    error: IconError
};

export const Notification = ({ className, children, type}) => {
    const Icon = icons[type];
    return (
        <button className={clsx(styles.button, styles[type], className)}>
            <Icon className={styles.icon}></Icon>
            <span className={styles.label}>{children}</span>
        </button>
    );
};

Notification.propTypes = {
    type: PropTypes.oneOf(['warning', 'success', 'error']).isRequired,
    children: PropTypes.string.isRequired,
    className: PropTypes.string
};