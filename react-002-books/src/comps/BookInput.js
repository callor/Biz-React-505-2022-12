/**
 * 함수형 컴포넌트
 */
const BookInput = (props) => {
  // input box 에 입력한 데이터를 BookMain 에 전달하여
  // 무엇인가(..) 처리하기 위하여 state 데이터와 setState() 함수를
  // 전달 받았다
  const { bookData, setBookData } = props;

  /**
   * React 에서 input box 처리하는 방법
   * 1. value 속성에 state 변수를 세팅 => input box 가 read only 가 된다
   * 2. 키보드로 입력한 내용을 state 변수에 담고, 다시 input box 에 나타나게 하기 위하여
   *    onChange event 를 설정해 주어야 한다
   * 이때 사용할 onChange event 를 처리할 함수를 선언한다
   *  이 함수는 키보드로 입력한 데이터를 다시 state 변수에 setting 하는 일만 수행한다
   */
  const bTitleInputChange = (e) => {
    const value = e.target.value;
    // bookData.b_title = value
    setBookData({ ...bookData, b_title: value });
  };

  /**
   * input 에 문자열을 입력하던중
   * Enter 를 누르면 처리할 event 핸들러
   *
   * 키보드 눌림 event
   * onKeyPress : 키를 눌렀을때, 계속 입력할때 계속해서 반응
   *    => ES5 이후에는 onKeyDown 으로 통합됨
   * onKeyDown : 키를 눌렀을때, 한번누르고 나면 event 동작이 멈추는 현상
   *    => KeyPress, KeyDown 은 이벤트가 발생한 후 문자가 입력
   * onKeyUp : 키를 눌렀다 떼는 순간
   *    => 문자가 먼저 입력된 후 이벤트가 발생한다
   */
  const onKeyDownHandler = (e) => {
    const keyCode = e.keyCode;
    const value = e.target.value;
    if (keyCode === 13) {
      /**
       * input box 에 문자열을 입력하는 동안 Enter 를 누르면
       * bookDataList 배열에 데이터를 추가하기
       */
      // alert(value);
    }
  };

  return (
    <div className="container">
      <input
        onKeyDown={onKeyDownHandler}
        onChange={bTitleInputChange}
        value={bookData.b_title}
        name="b_title"
        placeholder="도서명 입력 후 Enter..."
      />
    </div>
  );
};
export default BookInput;
