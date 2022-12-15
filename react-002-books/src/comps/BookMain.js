import { useEffect, useState } from "react";
import "../css/Book.css";
import BookInput from "./BookInput";
import BookList from "./BookList";
import { getQueryData } from "../modules/NaverBookFetch";
// default 로 export 한 모듈과, 이름으로 export 한 모듈을 동시에 가져오기
import BookListData, { BookData } from "../data/BookListData";

const BookMain = () => {
  const [bookListData, setBookList] = useState(BookListData);
  /**
   * useEffect( 함수, [] ) 형식의 사용
   * - 화면이 최초 rendering 될때 "한번만" 실행 하라
   */
  useEffect(() => {
    const fetchBook = async () => {
      const result = await getQueryData("자바스크립트");
      console.log(result);
    };
    fetchBook();
  }, []);

  return (
    <div className="Book">
      <BookInput />
      <BookList bookListData={bookListData} />
    </div>
  );
};

export default BookMain;
