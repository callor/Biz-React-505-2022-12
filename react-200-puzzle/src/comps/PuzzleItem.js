import { usePuzzleContext } from "../context/PuzzleContext";
const PuzzleItem = ({ item }) => {
  const { imgFile, piece } = usePuzzleContext();

  const imgStyle = {
    backgroundIzmage: `url(${imgFile.url})`,
    backgroundSize: "500px 500px",
    backgroundPositionX: `${item.posX}px`,
    backgroundPositionY: "0px",
    width: `${500 / (piece / 2)}px`,
    height: `${500 / (piece / 2)}px`,
  };

  return (
    <li>
      <img style={imgStyle}></img>
    </li>
  );
};
export default PuzzleItem;
