
import styles from './Menu.module.css';

const Menu = () => {
  return (
    <nav className={styles.menuContainer}>
      <h1 className={styles.title}>Menú Principal</h1>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <a href="#inicio">Inicio</a>
        </li>
        <li className={styles.navItem}>
          <a href="#contacto">Contacto</a>
        </li>
        <li className={styles.navItem}>
          <a href="#sobre">Sobre Nosotros</a>
        </li>
      </ul>
    </nav>
  )
}

export default Menu