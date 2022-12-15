const BookListData = [
  { b_isbn: "9790001", b_title: "자바스크립트 프로그래밍", b_author: "조현형" },
  { b_isbn: "9790002", b_title: "몽고DB", b_author: "크리스티나" },
  { b_isbn: "9790003", b_title: "React", b_author: "이고잉" },
  { b_isbn: "9790004", b_title: "자바입문", b_author: "고경희" },
  { b_isbn: "9790005", b_title: "스프링 입문", b_author: "윤인성" },
];

const BookData = {
  b_isbn: "",
  b_title: "임의 도서명",
  b_author: "",
};

/**
 * JS 모듈 만들기
 *      JS 모듈은 변수, 배열, 객체 등등 자료와
 *      함수, 클래스 등등을 별도의 파일로 분리하고
 *      다른 모듈에서 사용할수 있도록 구조화 시키는 작업이다
 * 작성한 모듈을 다른 모듈에서 import 할수 있도록 export 작업을 해주어야 한다.
 *
 * export 방법이 2가지가 있는데
 *      export default 모듈과 export { 모듈 } 방법이 있다
 *      모듈에는 최소한 두가지중 한가지는 반드시 존재해야 한다
 *
 * 1. export default 모듈
 *      내가 작성한 모듈의 이름은 "모듈" 이지만 사용하는 곳에서는 마음대로 변경 가능
 *      import 내모듈 from "모듈.js" 형식으로 사용하는 곳에서 이름을 명령할수 있다
 *
 * 2. export { 모듈 }
 *      반드시 내가 export 한 이름으로 import 를 수행해야 한다
 *      이때 구조 분해를 한다
 *      import { 모듈 } from "모듈.js"
 *
 *      이 방법으로 export 하면 하나의 모듈 파일에서
 *      다수의 모듈들(변수, 객체, 배열, 함수) export 할 수 있다.
 *
 *      이 경우 사용하는 곳에서 굳이 이름을 변경하려고 하면
 *      import { 모듈 as 내모듈 } from "모듈.js" 처럼 사용한다.
 *
 */
export default BookListData;
export { BookData };
