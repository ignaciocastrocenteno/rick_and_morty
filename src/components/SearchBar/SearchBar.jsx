import styles from "./SearchBar.module.css";
import logo from "../assets/rick-and-morty-logo.png";
import {useState} from "react";
import {NavLink} from "react-router-dom";

export default function SearchBar({onSearch}) {
  /* Creamos un estado para gestionar la limpieza del input del usuario */
  let [id, setId] = useState("");

  const handleChange = (event) => {
    setId((id = event.target.value));
  };

  const cleanField = () => {
    setId(() => "");
  };

  return (
    <nav className={styles.mainNavbar}>
      <img className={styles.logo} src={logo} alt="rick_and_morty_logo" />
      <NavLink to="/home" activeclassname="active">
        <button className={styles.navButton}>Home</button>
      </NavLink>
      <NavLink to="/about" activeclassname="active">
        <button className={styles.navButton}>About</button>
      </NavLink>
      <div className={styles.searchWrapper}>
        <input
          className={styles.searchInput}
          type="number"
          placeholder="Ingresar el ID del personaje (1-826)"
          onChange={handleChange}
          value={id}
          /* Aplicando RegEx para sólo aceptar números */
          oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
        />
        <button
          className={styles.searchButton}
          onClick={() => {
            onSearch(id);
            cleanField();
          }}
        >
          Agregar
        </button>
      </div>
    </nav>
  );
}
