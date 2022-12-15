import "../css/Book.css";
import BookInput from "./BookInput";
import BookList from "./BookList";
import { getQueryString } from "../modules/NaverBookFetch";

const BookMain = () => {
  getQueryString("자바스크립트");
  return (
    <div className="Book">
      <BookInput />
      <BookList />
    </div>
  );
};

export default BookMain;
