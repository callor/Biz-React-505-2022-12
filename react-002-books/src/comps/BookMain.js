import "../css/Book.css";
import BookInput from "./BookInput";
import BookList from "./BookList";

const BookMain = () => {
  return (
    <div className="Book">
      <BookInput />
      <BookList />
    </div>
  );
};

export default BookMain;
