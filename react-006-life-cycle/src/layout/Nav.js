import { NavLink } from "react-router-dom";
import "../css/Nav.css";

const Nav = () => {
  return (
    <nav className="main">
      <ul>
        <li>
          <NavLink to="/">HOME</NavLink>
        </li>
        <li>
          <NavLink to="/bbs">BBS</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
