import styles from './App.module.css';
import { Notification } from '../components/notifications';

export const App = () => {
    return (
        <div className={styles.container}>
            <Notification 
                type='warning'
                onClick={() => alert('Attantion!')}
                >
                    Notification
                </Notification>
            <Notification 
                type="success"
                onClick={() => alert('Attantion!')}
                >
                    Notification
                </Notification>
            <Notification 
                type="error"
                onClick={() => alert('Attantion!')}
                >
                    Notification
            </Notification>
        </div>
    )
}