import logo from "./logo.svg";
import "./App.css";
// import StateMain from "./comps/StateMain";
import PuzzleMain from "./comps/PuzzleMain";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <PuzzleMain />
    </div>
  );
}

export default App;
