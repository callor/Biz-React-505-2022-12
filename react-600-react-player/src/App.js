import "./App.css";
import { youtube } from "./data/playList";
import ReactPlayer from "react-player";
import { useState } from "react";

function App() {
  const [playListState, setPlayListState] = useState(youtube);
  // const [hover, setHover] = useState(false);

  const hoverSet = (id, toggle) => {
    setPlayListState([
      ...playListState.map((video) => {
        if (video.id === id) return { ...video, hover: toggle };
        else return video;
      }),
    ]);
  };

  const onMouseOverHandler = (id) => {
    hoverSet(id, true);
  };
  const onMouseOutHandler = (id) => {
    hoverSet(id, false);
  };

  const videoPlayer = playListState.map((video) => {
    return (
      <ReactPlayer
        onMouseOver={() => onMouseOverHandler(video.id)}
        onMouseOut={() => onMouseOutHandler(video.id)}
        url={video.src}
        playing={video.hover}
        muted={video.hover}
        className="react-player"
      />
    );
  });
  // setPlayListState(videoPlayer);
  return <div className="App">{videoPlayer}</div>;
}

export default App;
