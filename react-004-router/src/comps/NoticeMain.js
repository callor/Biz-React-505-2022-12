import { Outlet } from "react-router-dom";
const NoticeMain = () => {
  return (
    <>
      <h1>공지사항</h1>
      <Outlet />
    </>
  );
};
export default NoticeMain;
