import logo from "./logo.svg";
import "./App.css";
import { images } from "./modules/images";
import { useState } from "react";

const IMAGE_WIDTH = 500;

function App() {
  const [postion, setPosition] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const imagePrev = () => {
    setPosition(true);
  };
  const imageNext = () => {
    setPosition(false);
  };

  const onDragOverHandler = (e) => {
    e.preventDefault();
    e.currentTarget.style.opacity = "0.4";
  };

  const onDragEndHandler = (e) => {
    const box = e.currentTarget;
    box.style.opacity = "1";
    // if (e.clientX < IMAGE_WIDTH * 0.5) {
    //   setPosition(potion - IMAGE_WIDTH);
    // } else if (e.clientX > IMAGE_WIDTH * 0.5) {
    //   setPosition(potion + IMAGE_WIDTH);
    // }

    if (e.pageX < mouseX && postion > -1 * (images.length - 1) * IMAGE_WIDTH) {
      setPosition(postion - IMAGE_WIDTH);
    } else if (e.pageX > mouseX && postion < 0) {
      setPosition(postion + IMAGE_WIDTH);
    }
    setMouseX(e.pageX);
  };

  const onMouseDownHandler = (e) => {
    console.log(e.pageX);
    setMouseX(e.pageX);
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
        onMouseDown={onMouseDownHandler}
      >
        <div
          style={{ transform: `translateX(${postion}px)` }}
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
        <p>{postion}</p>
        <div className="button" onClick={imageNext}>
          Next
        </div>
      </div>
    </div>
  );
}

export default App;
