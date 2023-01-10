import logo from "./logo.svg";
import "./css/App.css";
import MyContainer from "./comps/MyContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <MyContainer text="Korea" />
    </div>
  );
}

export default App;
