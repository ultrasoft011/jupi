import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/NavBar";
import ItemDetail from "./components/ItemDetail";

function App() {
  return (
    <div className="App">
      {/* Navbar component */}
      <Navbar />
      <header className="App-header">
        {/* ItemListContainer component with props*/}
        <ItemListContainer welcome="This site is under construction, see you soon" />
        
      </header>
    </div>
  );
}

export default App;
