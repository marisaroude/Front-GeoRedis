import Link from "next/link";

export default function Navigation({ groupName }) {
  const links = [
    {
      label: 'Agregar lugar de interés',
      route: `/addPlaceOfInterest/${groupName}`,
    }, 
    {
      label: 'Obtener lugares dentro de 5km',
      route: `/getPlaces/${groupName}`,
    },
    {
      label: 'Calcular distancia con un lugar',
      route: `/calculateDistance/${groupName}`,
    },
    {
        label: 'Obtener coordenadas de un lugar',
        route: `/getCordinates/${groupName}`,
      },
    {
      label: 'Volver al inicio',
      route: '/',
    },
  ];

  return (
    <nav>
      <ul>
        {links.map(({ label, route }) => (
          <li key={route}>
            <Link href={route}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
