import "./css/App.css";
import logo from "./logo.svg";
import Button from "./comps/Button";
import Box from "./comps/Box";
import Section from "./comps/Section";
import Article from "./comps/Article";

function App() {
  const buttonStyle = {
    backgroundColor: "black",
    border: "none",
    color: "white",
    padding: "12px 16px",
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Section>
        <Button color="white" backgroundColor="blue">
          클릭하세요
        </Button>
        <Button buttonStyle={buttonStyle}>나도 클릭</Button>
        <Button color="yellow" backgroundColor="green">
          클릭하세요
        </Button>
        <Box />
      </Section>
      <Article yellow></Article>
    </div>
  );
}

export default App;
