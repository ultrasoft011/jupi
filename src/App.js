import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Jupi E-commerce</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learning React with CoderHouse
        </a>
      </header>
    </div>
  );
}

export default App;
