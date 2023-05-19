import "./App.css";
import {useState, useEffect} from "react";
import Cards from "./components/cards/Cards.jsx";
/* import characters, {Rick} from "./data.js"; */
import Nav from "./components/nav/Nav";
import Footer from "../src/components/footer/Footer.jsx";
import axios from "axios";

function App() {
  let [characters, setCharacters] = useState([]);

  /* const example = {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    gender: "Male",
    origin: {
      name: "Earth (C-137)",
      url: "https://rickandmortyapi.com/api/location/1",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  }; */

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({data}) => {
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    });
  }

  /* Recordar lo del estado implícito..! */
  const onClose = (id) => {
    const filtered = characters.filter((character) => {
      return Number(id) !== character["id"];
    });
    setCharacters(filtered);
  };

  return (
    <div className="App">
      <header>
        <Nav onSearch={onSearch} />
      </header>
      <main>
        <Cards characters={characters} onClose={onClose} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
