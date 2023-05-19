import "./App.css";
/* import Card from "./components/Card.jsx"; */
import Cards from "./components/cards/Cards.jsx";
import characters /* , {Rick} */ from "./data.js";
import Nav from "./components/nav/Nav";
import Footer from "../src/components/footer/Footer.jsx";

function App() {
  return (
    <div className="App">
      <header>
        <Nav onSearch={(characterID) => alert(characterID)} />
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
