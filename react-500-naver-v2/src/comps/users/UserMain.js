import { Link } from "react-router-dom";
import CardMain from "../CardMain";
import UserLogin from "./UserLogin";

const UserMain = () => {
  return (
    <CardMain
      width="50%"
      maxHeight="400px"
      header={<h1 className="w3-green w3-center">로그인</h1>}
      footer={
        <>
          <Link to="/user/join" className="w3-text-blue">
            회원가입
          </Link>
          &nbsp;|&nbsp;
          <Link to="/user/find/id" className="w3-text-blue">
            아이디찾기
          </Link>
          &nbsp;|&nbsp;
          <Link to="/user/find/password" className="w3-text-blue">
            비밀번호찾기
          </Link>
        </>
      }
    >
      <UserLogin />
    </CardMain>
  );
};
/**
 * <a href="javascript:void(0)">
 * Vanila JS 에서 a tag 의 style 은 그대로 유지하면서
 * link 를 클릭했을 때 URL jump 기능만 무력화 할때
 */

export default UserMain;
