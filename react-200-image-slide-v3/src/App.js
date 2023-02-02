import logo from "./logo.svg";
import "./App.css";
import { images } from "./modules/images";
import { useState } from "react";

const IMAGE_WIDTH = 500;

function App() {
  const [potion, setPosition] = useState(0);
  const [currentPos, setCurrentPos] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const imagePrev = () => {
    setPosition(true);
  };
  const imageNext = () => {
    setPosition(false);
  };

  const onDragHandler = (e) => {
    // const box = e.currentTarget;
    // const left = box.getBoundingClientRect().left;
    // setPosition(e.pageX);
    let newPotion = potion;
    const newMouseX = e.clientX;

    console.log(mouseX, newMouseX);
    if (newMouseX < mouseX) {
      newPotion = currentPos - newMouseX;
    } else if (newMouseX > mouseX) {
      newPotion = currentPos + newMouseX;
    }
    // setPosition(newPotion);
    // setMouseX(newMouseX);
  };

  const onDragOverHandler = (e) => {
    e.preventDefault();
    e.currentTarget.style.opacity = "0.4";
    setMouseX(e.clientX);
  };

  const onDragEndHandler = (e) => {
    const box = e.currentTarget;
    box.style.opacity = "1";
    console.log("Drag End", e.clientX);
    if (e.clientX < IMAGE_WIDTH * 0.5) {
      setPosition(potion - IMAGE_WIDTH);
    } else if (e.clientX > IMAGE_WIDTH * 0.5) {
      setPosition(potion + IMAGE_WIDTH);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div
        className="image-view"
        draggable="true"
        onDragOver={onDragOverHandler}
        onDragEnd={onDragEndHandler}
      >
        <div
          style={{ transform: `translateX(${potion}px)` }}
          className="image-box"
          draggable="false"
        >
          {images.map((image, index) => (
            <img
              draggable="false"
              src={image}
              width="100%"
              height="100%"
              alt={index}
              key={index}
            />
          ))}
          {images.map((image, index) => (
            <img
              draggable="false"
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
