import styles from '../home.module.css';
import Navigation from "@/components/Navigation";

export default function EmergencyCare() {
    return (
        <div className={styles.container}>
            <h1>¿Qué acción desea realizar con el grupo de Centro de atención de emergencia? </h1>
            <div className={styles.containerOptions}>
                <Navigation groupName="Emergencias" />
            </div>
        </div>
    );
}
