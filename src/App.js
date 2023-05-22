import "./App.css";
import {useState} from "react";
import Cards from "./components/cards/Cards.jsx";
import Nav from "./components/nav/Nav";
import Footer from "../src/components/footer/Footer.jsx";
import axios from "axios";
import {Routes, Route, Navigate} from "react-router-dom";
import About from "../src/components/about/About.jsx";
import NotFound from "../src/components/notFound/NotFound.jsx";
import Detail from "./components/detail/Detail";

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
      <Nav onSearch={onSearch} />
      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        ></Route>
        <Route path="/" element={<Navigate to="/home" replace />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        {/* <Route path="/notFound" element={<NotFound />}></Route>
        <Route path="*" element={<Navigate to="/notfound" replace />}></Route> */}
      </Routes>
      {/* <header></header>
      /* <main>
        <Cards characters={characters} onClose={onClose} />
      </main> */}
    </div>
  );
}

export default App;
