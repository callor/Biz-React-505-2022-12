import "../css/Puzzle.css";
import { PuzzleContextProvider } from "../context/PuzzleContext";
import PuzzleImage from "./PuzzleImage";
const PuzzleMain = () => {
  return (
    <PuzzleContextProvider>
      <PuzzleImage />;
    </PuzzleContextProvider>
  );
};
export default PuzzleMain;
