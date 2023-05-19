import styles from "./SearchBar.module.css";
import logo from "../assets/rick-and-morty-logo.png";
import {useState} from "react";

export default function SearchBar({onSearch}) {
  let [id, setId] = useState("");

  const handleChange = (event) => {
    setId((id = event.target.value));
  };

  return (
    <nav className={styles.mainNavbar}>
      <img className={styles.logo} src={logo} alt="rick_and_morty_logo" />
      <div className={styles.searchWrapper}>
        <input
          className={styles.searchInput}
          type="search"
          placeholder="ID del personaje"
          onChange={handleChange}
        />
        <button className={styles.searchButton} onClick={() => onSearch(id)}>
          Agregar
        </button>
      </div>
    </nav>
  );
}
