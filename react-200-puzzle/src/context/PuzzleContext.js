import { createContext, useContext, useState } from "react";

const PuzzleContext = createContext();

const usePuzzleContext = () => {
  return useContext(PuzzleContext);
};

const PuzzleContextProvider = ({ children }) => {
  const [puzzlePiece, setPuzzlePiece] = useState([]);
  const [imgFile, setImgFile] = useState({});
  const [piece, setPiece] = useState(4);

  const puzzleShuffle = () => {
    if (!imgFile.url) {
      alert("이미지를 먼저 선택해 주세요");
      return false;
    }

    console.log(piece);
    const pieceArray = Array(piece)
      .fill(0)
      .map((_, index) => {
        const pieceInfo = {
          posX: ((index + 1) % piece) * -100,
          posY: 0,
        };
        return pieceInfo;
      });
    // console.log("pice", pieceArray);
    setPuzzlePiece([...pieceArray]);

    // for (let i = 0; i < piece; i++) {
    //   const pieceInfo = {
    //     posX: ((i % piece) + 1) * -100,
    //   };
    //   console.log(pieceInfo, i);
    //   setPuzzlePiece([...puzzlePiece, pieceInfo]);
    // }
  };

  const props = {
    imgFile,
    setImgFile,
    piece,
    setPiece,
    puzzlePiece,
    puzzleShuffle,
    setPuzzlePiece,
  };

  return (
    <PuzzleContext.Provider value={props}>{children}</PuzzleContext.Provider>
  );
};

export { PuzzleContextProvider, usePuzzleContext };
