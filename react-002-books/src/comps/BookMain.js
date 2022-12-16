import { useEffect, useState } from "react";
import "../css/Book.css";
import Modal from "./ModalMain";
import BookInput from "./BookInput";
import BookList from "./BookList";
import { getQueryData } from "../modules/NaverBookFetch";
// default 로 export 한 모듈과, 이름으로 export 한 모듈을 동시에 가져오기
import BookListData, { BookData } from "../data/BookListData";
import NaverBookList from "./NaverBookList";

const BookMain = () => {
  // 임시로 만들어진 List 데이터를 가져와서 state 배열 생성
  // List 를 보여줄때 사용할 데이터
  const [bookListData, setBookList] = useState(BookListData);
  // 한개 도서의 데이터
  // input box 에 입력한 내용을 임시 저장할 변수
  const [bookData, setBookData] = useState(BookData);
  const [naverBookListData, setNaverBookListData] = useState([]);
  const [openModal, setOpenModal] = useState({
    input: false,
    naver: false,
  });

  /**
   * useEffect( 함수, [] ) 형식의 사용
   * - 화면이 최초 rendering 될때 "한번만" 실행 하라
   */
  useEffect(() => {
    const fetchBook = async () => {
      const result = await getQueryData("자바스크립트");
      setNaverBookListData(result);
      console.log(result);
    };
    fetchBook();
  }, []);

  return (
    <div className="Book">
      <div>{bookData.b_title}</div>
      <BookList bookListData={bookListData} />
      <div>
        <button onClick={() => setOpenModal({ ...openModal, input: true })}>
          입력창
        </button>
        <button onClick={() => setOpenModal({ ...openModal, naver: true })}>
          네이버
        </button>
      </div>
      <Modal
        open={openModal.input}
        close={() => setOpenModal({ ...openModal, input: false })}
      >
        <BookInput bookData={bookData} setBookData={setBookData} />
      </Modal>
      <Modal open={openModal.naver}>
        <NaverBookList bookListData={naverBookListData} />
      </Modal>
    </div>
  );
};

export default BookMain;
