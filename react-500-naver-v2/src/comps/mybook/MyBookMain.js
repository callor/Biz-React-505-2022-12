import { Navigate, useLocation } from "react-router-dom";
import { useUserContext } from "../../context/UserContextProvider";
import CardMain from "../CardMain";
import MyBookList from "./MyBookList";

const MyBookMain = () => {
  // 만약 /user/mybook 으로 접근하면 /user/mybook 문자열을 담고 있는 객체
  const { pathname } = useLocation();
  const { sessionUser } = useUserContext();

  if (!sessionUser?.username) {
    return <Navigate to="/user/login" state={pathname} />;
  } else {
    return (
      <CardMain maxHeight="800px" width="70%" header={<h1>내 도서 목록</h1>}>
        <MyBookList />
      </CardMain>
    );
  }
};

export default MyBookMain;
