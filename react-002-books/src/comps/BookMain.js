import { useEffect, useState } from "react";
import "../css/Book.css";
import BookInput from "./BookInput";
import BookList from "./BookList";
import { getQueryData } from "../modules/NaverBookFetch";
// default 로 export 한 모듈과, 이름으로 export 한 모듈을 동시에 가져오기
import BookListData, { BookData } from "../data/BookListData";

const BookMain = () => {
  // 임시로 만들어진 List 데이터를 가져와서 state 배열 생성
  // List 를 보여줄때 사용할 데이터
  const [bookListData, setBookList] = useState(BookListData);
  // 한개 도서의 데이터
  // input box 에 입력한 내용을 임시 저장할 변수
  const [bookData, setBookData] = useState(BookData);
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

  /**
   * BookInput 에서 입력된 데이터는 bookData 의 b_title 속성에 반영되고 있다
   *    이 코드는 BookInput 의 bTitleInputChange() 함수에서
   *    bookData state 변수를 변경하는 코드가 하는 일
   * booKData 의 b_title 이 변경되었을 때 화면에 어떤 변화를 주는 코드는
   *    전혀 작성하지 않았다
   * 그럼에도 불구하고 input box 에 입력된 데이터가
   *    BookMain 의 <div>{bookData.b_title}</div> 여기에 실시간으로
   *    반영(표시) 되고 있다.
   *    bookData 가 state 변수이기 때문에
   * state 변수가 어딘가에서 변경이 되면(변화가 발생하면)
   *    react 는 state 변수를 화면에 표현하는 곳이 있는가 찾아서
   *    자동으로 변화를 반영한다.
   */

  return (
    <div className="Book">
      <div>{bookData.b_title}</div>
      <BookInput bookData={bookData} setBookData={setBookData} />
      <BookList bookListData={bookListData} />
    </div>
  );
};

export default BookMain;
