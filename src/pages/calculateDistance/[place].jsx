import { getDistanceWithPlace } from '@/functions/functions';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from './calculateDistance.module.css'
export default function getDistance() {
    const router = useRouter();
    const { place } = router.query;
    const [longitude, setLongitude] = useState('');
    const [latitude, setLatitude] = useState('');
    const [name, setName] = useState('');
    const [result, setResult] = useState('');

    const getDistance = async () => {
        try {
            const data = await getDistanceWithPlace(place, longitude, latitude, name);
            data && setResult(data.message);

        } catch (error) {
            console.error('Error get distance. Please try again later.');

        }
    }
    const handleLongitudeChange = (event) => {
        setLongitude(event.target.value);
    }

    const handleLatitudeChange = (event) => {
        setLatitude(event.target.value);
    }
    const handleNameChange = (event) => {
        setName(event.target.value);
      }
    return (

        <div className={styles.container}>
            <h1>Ingrese sus coordenadas y el nombre de un lugar del grupo {place} para calcular la distancia. </h1>
            <div className={styles.containerInputs}>
                <input type="text" value={longitude} onChange={handleLongitudeChange} placeholder="Ingrese la longitud de su ubicación" />
                <input type="text" value={latitude} onChange={handleLatitudeChange} placeholder="Ingrese la latitud de su ubicación" />
                <input type="text" value={name} onChange={handleNameChange} placeholder="Ingrese el nombre del lugar" />
            </div>
            <div className={styles.containerButton}>

                <button onClick={() => getDistance()} >Obtener distancia</button>
                <a href='/'>Volver al inicio</a>

            </div>
            <div className={styles.containerData}>
                {result}
            </div>
        </div>
    );
}