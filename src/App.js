import "./App.css";
import {useState, useEffect} from "react";
import Cards from "./components/cards/Cards.jsx";
import Nav from "./components/nav/Nav";
import axios from "axios";
import {Routes, Route, useNavigate} from "react-router-dom";
import About from "../src/components/about/About.jsx";
// import NotFound from "../src/components/notFound/NotFound.jsx";
import Detail from "./components/detail/Detail";
import Form from "./components/forms/Form.jsx";

function App() {
  let [characters, setCharacters] = useState([]);

  const [access, setAccess] = useState(false);
  const ADMIN_EMAIL = "test@gmail.com";
  const ADMIN_PASSWORD = "Abcd1234$";

  const navigate = useNavigate();

  // App.js
  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const login = (userData) => {
    if (
      userData.email === ADMIN_EMAIL &&
      userData.password === ADMIN_PASSWORD
    ) {
      setAccess(true);
      alert("Access Granted");
      setTimeout(() => {
        navigate("/home");
      }, 1300);
    } else {
      alert("Invalid Form Credential. Try again!");
    }
  };

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
        <Route path="/" element={<Form login={login} />}></Route>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        {/* <Route path="/notFound" element={<NotFound />}></Route>
        <Route path="*" element={<Navigate to="/notfound" replace />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
