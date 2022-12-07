/**
 * JSX 코드
 * javaScript 를 확장한 ReactJS 스크립트
 * JS 함수를 통하여 Html 코드를 생성하고,
 * export 를 하여 다른 JSX 코드에서 import 하여 연결하는 구조
 */
const Nav = () => {
  return (
    <nav className="main">
      <ul>
        <li>Home</li>
        <li>공지사항</li>
        <li>자유게시판</li>
        <li>로그인</li>
        <li>회원가입</li>
      </ul>
    </nav>
  );
};

export default Nav;
