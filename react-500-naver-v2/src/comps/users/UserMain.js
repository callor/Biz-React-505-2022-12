import { Link, Outlet, useLocation } from "react-router-dom";
import CardMain from "../CardMain";

const HeaderComp = ({ path }) => {
  return path.includes("login") ? (
    <h1 className="w3-green w3-center">로그인</h1>
  ) : (
    <h1 className="w3-blue w3-center">회원가입</h1>
  );
};

const FooterComp = ({ path }) => {
  console.log("UserMain path", path);
  return (
    <>
      {path.includes("login") ? (
        <Link to="/user/join" className="w3-text-blue">
          회원가입
        </Link>
      ) : (
        <Link to="/user/login" className="w3-text-blue">
          로그인
        </Link>
      )}
      &nbsp;|&nbsp;
      <Link to="/user/find/id" className="w3-text-blue">
        아이디찾기
      </Link>
      &nbsp;|&nbsp;
      <Link to="/user/find/password" className="w3-text-blue">
        비밀번호찾기
      </Link>
    </>
  );
};

const UserMain = () => {
  // router 의 userLocation() hook
  // 이 컴포넌트를 열기 위해서 접속한 Link 정보를 getter 하기 위한 함수
  const resolvePath = useLocation();

  return (
    <CardMain
      width="50%"
      maxHeight="80vh"
      header={<HeaderComp path={resolvePath.pathname} />}
      footer={<FooterComp path={resolvePath.pathname} />}
    >
      <Outlet />
    </CardMain>
  );
};
/**
 * <a href="javascript:void(0)">
 * Vanila JS 에서 a tag 의 style 은 그대로 유지하면서
 * link 를 클릭했을 때 URL jump 기능만 무력화 할때
 */

export default UserMain;
