import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const comp = (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>반갑습니다</p>
        Learn React
      </header>
    </div>
  );
  return comp;
};

export default App;
