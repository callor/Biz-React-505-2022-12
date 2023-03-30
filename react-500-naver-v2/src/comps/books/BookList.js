import BookItem from "./BookItem";
import { useBookContext } from "../../context/BookContextProvider";

const BookListView = (props) => {
  const { bookList } = props;
  return bookList?.map((book) => {
    return <BookItem book={book} key={book.isbn} />;
  });
};

const BookList = () => {
  const context = useBookContext();
  return (
    <>
      <ul className="w3-ul book">
        <BookListView bookList={context.bookList} />
      </ul>
      // pagiNation : 만약 3페이지를 선택
      <button
        onClick={() => {
          context.setPageNum(3);
        }}
      >
        3페이지
      </button>
    </>
  );
};
export default BookList;
