import "./App.css";
import Hello from "./components/Hello";

const App = () => {
  const comp = (
    <div className="App">
      <header className="App-header">
        <Hello />
      </header>
    </div>
  );
  return comp;
};

export default App;
