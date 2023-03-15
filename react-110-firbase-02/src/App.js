import logo from "./logo.svg";
import "./App.css";
import Nav from "./layout/Nav";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Nav />
      <Outlet />
    </div>
  );
};

export default App;
