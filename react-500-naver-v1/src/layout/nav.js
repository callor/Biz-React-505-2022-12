import "../css/Nav.css";
import { useUserContext } from "../context/UserContextProvider";
/**
 * 내부에서 return () 함수가 있는 모듈은
 * react 에서는 컴포넌트 이다
 * 이렇게 작성된 컴포넌트는 또다른 컴포넌트의 그룹원이 된다.
 */
const Nav = () => {
  const { loginUser } = useUserContext();
  /**
   * 컴포넌트에서 return
   * 일반적인 JS 모듈에서는 return 은 데이터를 되돌려주는 명령어이다
   * 하지만 컴포넌트에서는 컴포넌트를 만드는 함수로 생각하자
   * 컴포넌트들을 묶어서 하나의 그룹 컴포넌트로 만들어주는 함수
   */
  return (
    <nav className="w3-container w3-blue w3-bar main">
      <a href="#">Home</a>
      <a href="#">도서정보</a>
      <a href="#">내 도서</a>

      {!loginUser.username && (
        <>
          <a href="#">로그인</a>
          <a href="#">회원가입</a>
        </>
      )}
      {loginUser.username && (
        <>
          <a href="#">로그아웃</a>
          <a href="#">내 페이지</a>
        </>
      )}
    </nav>
  );
};
export default Nav;
