import { Link } from "react-router-dom";
import "../css/Nav.css";
const Nav = () => {
  return (
    <nav className="main">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/notice">공지사항</Link>
        </li>
        <li>
          <Link to="/bbs">자유게시판</Link>
        </li>
        <li>
          <Link to="/user/login">로그인</Link>
        </li>
        <li>
          <Link to="/user/join">회원가입</Link>
        </li>
        <li>
          <input placeholder="검색어" />
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
