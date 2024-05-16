import styles from '../home.module.css';
import Navigation from "@/components/Navigation";

export default function Pharmacities() {
    return (
        <div className={styles.container}>
            <h1>¿Qué acción desea realizar con el grupo de Farmacias? </h1>
            <div className={styles.containerOptions}>
                <Navigation groupName="Farmacias" />
            </div>
        </div>
    );
}
