import { usePuzzleContext } from "../context/PuzzleContext";
import PuzzleItem from "./PuzzleItem";

const PuzzleImage = () => {
  const { imgFile, setImgFile, piece, setPiece, puzzlePiece, puzzleShuffle } =
    usePuzzleContext();
  const imgOnChangeHandler = (e) => {
    const uploadImgFile = {
      url: URL.createObjectURL(e.target.files[0]),
      fileName: e.target.files[0].name,
    };
    setImgFile({ ...uploadImgFile });
  };

  const pieceOnChangeHander = (e) => {
    setPiece(e.target.value);
  };
  const imgOnClickHandler = (e) => {
    puzzleShuffle();
  };

  const PuzzleShuffleList = puzzlePiece.map((item) => {
    return <PuzzleItem item={item} />;
  });

  const ulStyle = {
    position: "relative",
    minWidth: `${500 / piece / 2}px`,
    minHeight: `${500 / piece / 2}px`,
    listStyle: "none",
    display: "grid",
    gridTemplateColumns: `repeat(${piece / 2}, 1fr)`,
  };

  return (
    <div className="puzzle-wrap">
      <ul className="image-wrap" style={ulStyle}>
        {PuzzleShuffleList.length > 0 ? (
          PuzzleShuffleList
        ) : imgFile?.url ? (
          <img src={imgFile.url} alt={imgFile.fileName} width="500px" />
        ) : (
          <div>이미지를 선택하세요</div>
        )}
      </ul>
      <div>
        <input type="file" accept="images/*" onChange={imgOnChangeHandler} />
      </div>
      <div>
        <input
          type="number"
          placeholder="조각개수"
          value={piece}
          onChange={pieceOnChangeHander}
        ></input>
        <button onClick={imgOnClickHandler}>게임 시작</button>
      </div>
    </div>
  );
};

export default PuzzleImage;
