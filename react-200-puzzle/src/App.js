import logo from "./logo.svg";
import "./App.css";
import StateMain from "./comps/StateMain";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <StateMain />
    </div>
  );
}

export default App;
