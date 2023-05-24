import styles from "./SearchBar.module.css";
import logo from "../assets/rick-and-morty-logo.png";
import {useEffect, useState} from "react";
import {NavLink, useLocation} from "react-router-dom";

export default function SearchBar({onSearch}) {
  /* Creamos un estado para gestionar la limpieza del input del usuario */
  let [id, setId] = useState("");
  const location = useLocation();
  /* console.log(location); */

  const handleChange = (event) => {
    setId((id = event.target.value));
  };

  const cleanField = () => {
    setId(() => "");
  };

  if (location.pathname !== "/") {
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
            step={1}
            min={1}
            max={826}
            required
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
}
