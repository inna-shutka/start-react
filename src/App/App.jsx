import styles from './App.module.css';
import { Notification } from '../components/notifications';

export const App = () => {
    return (
        <div className={styles.container}>
         <Notification type="warning" className={styles.notifBtn}>Notification</Notifications>
        <Notification type="success" className={styles.notifBtn}>Notification</Notifications>
        <Notification type="error" className={styles.notifBtn}>Notification</Notifications>
        </div>
    )
}