import "./App.css";
/* import Card from "./components/Card.jsx"; */
import Cards from "./components/Cards/Cards.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import characters, {Rick} from "./data.js";

function App() {
  return (
    <div className="App">
      <header>
        <SearchBar onSearch={(characterID) => alert(characterID)} />
      </header>
      <main>
        <Cards characters={characters} />
      </main>
      {/* <Card
            id={Rick.id}
            name={Rick.name}
            status={Rick.status}
            species={Rick.species}
            gender={Rick.gender}
            origin={Rick.origin.name}
            image={Rick.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
         /> */}
      <footer>
        <div id="author">
          <small>
            <em>
              {" "}
              &copy; Copyright 2023, Ignacio Castro Centeno. All rights reserved
            </em>
          </small>
        </div>
      </footer>
    </div>
  );
}

export default App;
