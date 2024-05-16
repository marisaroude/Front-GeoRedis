import Link from "next/link";
import styles from './home.module.css'
export default function Home() {
  const links = [
    {
      label: 'Cervecerías Artesanales',
      route: '/craftBreweries',
    }, {
      label: 'Universidades',
      route: '/universities',
    },
    {
      label: 'Farmacias',
      route: '/pharmacities',
    },
    {
      label: 'Centro de atención de emergencias',
      route: '/emergencyCare',
    },
    {
      label: 'Supermercados',
      route: '/supermarkets',
    },
  ]

  return (

    <div className={styles.container}>
      <h1>¿Sobre qué grupo desea realizar alguna actividad?</h1>
      <div className={styles.containerOptions}>
        <nav>
          <ul>
            {links?.map(({ label, route }) => (
              <li key={route}>
                <Link href={route}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
