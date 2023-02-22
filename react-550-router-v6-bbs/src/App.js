import logo from "./logo.svg";
import "./css/App.css";
import Nav from "./layout/Nav";
import { Outlet } from "react-router-dom";
// import { BBsContextProvider } from "./provider/BBsContext";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello BBS 2023</h1>
        <p>NodeJS, React 연동 pagination BBS</p>
      </header>
      <Nav />
      <Outlet />
    </div>
  );
}

export default App;
