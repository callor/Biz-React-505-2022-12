import logo from "./logo.svg";
import "./App.css";
import { images } from "./modules/images";
import { useState } from "react";

const IMAGE_WIDTH = 500;
function App() {
  const [potion, setPosition] = useState(0);
  const imagePrev = () => {
    let newPotion = potion + IMAGE_WIDTH;
    if (potion === 0) {
      newPotion = IMAGE_WIDTH * (images.length - 1) * -1;
    }
    setPosition(newPotion);
  };
  const imageNext = () => {
    let newPotion = potion - IMAGE_WIDTH;
    if (potion <= IMAGE_WIDTH * (images.length - 1) * -1) {
      newPotion = 0;
    }
    console.log("Position", potion);
    setPosition(newPotion);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="image-view">
        <div
          style={{ transform: `translateX(${potion}px)` }}
          className="image-box"
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
              alt={index * 2}
              key={index * 2}
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
