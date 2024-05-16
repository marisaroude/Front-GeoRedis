import styles from '../home.module.css';
import Navigation from "@/components/Navigation";

export default function CraftBreweries() {
    return (
        <div className={styles.container}>
            <h1>¿Qué acción desea realizar con el grupo de Cervecerías Artesanales? </h1>
            <div className={styles.containerOptions}>
                <Navigation groupName="CerveceriasArtesanales" />
            </div>
        </div>
    );
}
