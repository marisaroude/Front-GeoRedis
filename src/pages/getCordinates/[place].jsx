import { getCordinatesOfPlace } from '@/functions/functions';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from './getCordinates.module.css'
export default function getCordinates() {
    const router = useRouter();
    const { place } = router.query;
    const [name, setName] = useState('');
    const [result, setResult] = useState([]);

    const getCordinates = async () => {
        try {
            const data = await getCordinatesOfPlace(place, name);
            data && setResult(data.message);

        } catch (error) {
            console.error('Error get cordinates Please try again later.');

        }
    }
    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    return (

        <div className={styles.container}>
            <h1>Ingrese el nombre del lugar perteneciente al grupo {place} para conocer sus coordenadas. </h1>
            <div className={styles.containerInputs}>
                <input type="text" value={name} onChange={handleNameChange} placeholder="Ingrese el nombre" />
            </div>
            <div className={styles.containerButton}>

                <button onClick={() => getCordinates()} >Obtener coordenadas</button>
                <a href='/'>Volver al inicio</a>

            </div>
            <div className={styles.containerData}>
                {result &&
                    result.map((item, index) => {
                        return (
                            <div key={index}>
                                <h1>Longitud: {item?.longitude}</h1>
                                <h1>Latitud: {item?.latitude}</h1>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}