import logo from "./logo.svg";
import "./css/App.css";
import Nav from "./page/Nav";
import MainRouter from "./page/MainRouter";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
        <Nav />
        <MainRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
