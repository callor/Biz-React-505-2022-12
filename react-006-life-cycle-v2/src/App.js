import logo from "./logo.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import Inputs from "./comps/Inputs";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Inputs />
      <Outlet />
    </div>
  );
}

export default App;
