import logo from "./logo.svg";
import "./App.css";
import ProMain from "./comps/ProMain";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <ProMain />
    </div>
  );
}

export default App;
