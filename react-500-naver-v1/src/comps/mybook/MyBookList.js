import { useMyBookContext } from "../../context/MyBookContextProvider";
import BookItem from "../books/BookItem";
import "../../css/Book.css";

const MyBookItem = ({ myBookList }) => {
  return myBookList.map((book) => {
    return <BookItem book={book} key={book.isbn} />;
  });
};

const MyBookList = () => {
  const { myBookList } = useMyBookContext();
  return (
    <ul className="w3-ul book">
      <MyBookItem myBookList={myBookList} />
    </ul>
  );
};

export default MyBookList;
