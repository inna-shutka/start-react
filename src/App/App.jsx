import styles from './App.module.css';
import { Notification } from '../components/notifications';

export const App = () => {
    return (
        <div className={styles.container}>
            <Notification type="warning">Notification</Notification>
            <Notification type="success">Notification</Notification>
            <Notification type="error">Notification</Notification>
        </div>
    )
}