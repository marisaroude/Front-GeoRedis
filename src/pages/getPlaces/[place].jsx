import { getPlaceInRadius } from '@/functions/functions';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from './getPlaces.module.css'
export default function getPlace() {
    const router = useRouter();
    const { place } = router.query;
    const [longitude, setLongitude] = useState('');
    const [latitude, setLatitude] = useState('');
    const [result, setResult] = useState([]);

    const getPlaceWithinRadius = async () => {
        try {
            const data = await getPlaceInRadius(place, longitude, latitude);
            data && setResult(data.message);

        } catch (error) {
            console.error('Error get place. Please try again later.');

        }
    }
    const handleLongitudeChange = (event) => {
        setLongitude(event.target.value);
    }

    const handleLatitudeChange = (event) => {
        setLatitude(event.target.value);
    }

    return (

        <div className={styles.container}>
            <h1>Ingrese sus coordenadas para buscar los lugares del grupo {place} que se encuentran en un radio de 5km. </h1>
            <div className={styles.containerInputs}>
                <input type="text" value={longitude} onChange={handleLongitudeChange} placeholder="Ingrese la longitud" />
                <input type="text" value={latitude} onChange={handleLatitudeChange} placeholder="Ingrese la latitud" />
            </div>
            <div className={styles.containerButton}>

                <button onClick={() => getPlaceWithinRadius()} >Obtener lugares</button>
                <a href='/'>Volver al inicio</a>

            </div>
            <div className={styles.containerData}>
                {result &&
                    result.map((item, index) => {
                        return <h1 key={index}>{item}</h1>
                    })
                }
            </div>
        </div>
    );
}