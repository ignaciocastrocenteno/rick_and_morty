import "./App.css";
import {useState, useEffect} from "react";
import Cards from "./components/cards/Cards.jsx";
/* import characters, {Rick} from "./data.js"; */
import Nav from "./components/nav/Nav";
import Footer from "../src/components/footer/Footer.jsx";

function App() {
  const [characters, setCharacters] = useState([]);

  const example = {
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
  };

  const onSearch = (event) => {
    /* Recordar lo del estado implícito */
    setCharacters([...characters, example]);
  };

  return (
    <div className="App">
      <header>
        <Nav onSearch={onSearch} />
      </header>
      <main>
        <Cards characters={characters} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
