import logo from "./logo.svg";
import "./App.css";
import { images } from "./modules/images";
import { useState } from "react";

function App() {
  const [potion, setPosition] = useState(true);
  const imagePrev = () => {
    setPosition(true);
  };
  const imageNext = () => {
    setPosition(false);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="image-view">
        <div
          className={
            potion ? "image-box animation-left" : "image-box animation-right"
          }
        >
          {images.map((image, index) => (
            <img
              src={image}
              width="100%"
              height="100%"
              alt={index}
              key={index}
            />
          ))}
          {images.map((image, index) => (
            <img
              src={image}
              width="100%"
              height="100%"
              alt={`2_${index}`}
              key={`2_${index}`}
            />
          ))}
        </div>
      </div>
      <div className="botton-box">
        <div className="button" onClick={imagePrev}>
          Prev
        </div>
        <p>{potion}</p>
        <div className="button" onClick={imageNext}>
          Next
        </div>
      </div>
    </div>
  );
}

export default App;
