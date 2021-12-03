import "./App.css";
import Navbar from "./components/NavBar";
import logo from "./images/jupiter.png";

function App() {
  return (
    <div className="App">
      {/* Navbar component */}
      <Navbar />
      <header className="App-header">
        <p>Jupi E-commerce</p>
      </header>
    </div>
  );
}

export default App;
