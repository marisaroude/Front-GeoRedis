import styles from '../home.module.css';
import Navigation from "@/components/Navigation";

export default function Universities() {
    return (
        <div className={styles.container}>
            <h1>¿Qué acción desea realizar con el grupo de Universidades? </h1>
            <div className={styles.containerOptions}>
                <Navigation groupName="Universidades" />
            </div>
        </div>
    );
}
