import styles from "../SearchBar/SearchBar.module.css";
import logo from "../assets/intro-wallpaper.png";

export default function SearchBar({onSearch}) {
  return (
    <nav className={styles.mainNavbar}>
      <img className={styles.logo} src={logo} alt="rick_and_morty_logo" />
      <div className={styles.searchWrapper}>
        <input
          className={styles.searchInput}
          type="search"
          placeholder="Ingrese su personaje"
        />
        <button className={styles.searchButton} onClick={onSearch}>
          Agregar
        </button>
      </div>
    </nav>
  );
}
