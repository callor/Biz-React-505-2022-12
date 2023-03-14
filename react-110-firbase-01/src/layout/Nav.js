import { NavLink } from "react-router-dom";
import "../css/Nav.css";
import { useFirebaseContext } from "../provider/FirebaseProvider";
const Nav = () => {
  const { loginUser } = useFirebaseContext();
  return (
    <nav className="main">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/todo">TodoList</NavLink>
      {loginUser ? (
        <>
          <NavLink to="/user/mypage">마이페이지</NavLink>
          <NavLink to="#">로그아웃</NavLink>
        </>
      ) : (
        <>
          <NavLink to="/user/login">로그인</NavLink>
          <NavLink to="/user/join">회원가입</NavLink>
        </>
      )}
    </nav>
  );
};
export default Nav;
