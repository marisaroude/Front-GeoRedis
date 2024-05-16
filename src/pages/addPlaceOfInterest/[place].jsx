import { addPlaceInGroup } from '@/functions/functions';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from './addPlaceOfInterest.module.css'
export default function AddPlace() {
  const router = useRouter();
  const { place } = router.query;
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');
  const [name, setName] = useState('');

  const addPlace = async () => {
    try {
      const data = await addPlaceInGroup(place, longitude, latitude, name);
      data && alert('Lugar añadido')
    } catch (error) {
      console.error('Error add place. Please try again later.');

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
      <h1>Ingrese los datos del lugar de interés a agregar al grupo de {place}</h1>
      <div className={styles.containerInputs}>
        <input type="text" value={longitude} onChange={handleLongitudeChange} placeholder="Ingrese la longitud" />
        <input type="text" value={latitude} onChange={handleLatitudeChange} placeholder="Ingrese la latitud" />
        <input type="text" value={name} onChange={handleNameChange} placeholder="Ingrese el nombre" />
      </div>
      <div className={styles.containerButton}>
        <button onClick={() => addPlace()} >Agregar lugar</button>
        <a href='/'>Volver al inicio</a>
      </div>
    </div>
  );
}