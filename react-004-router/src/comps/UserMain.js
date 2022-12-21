import { Outlet } from "react-router-dom";
const UserMain = () => {
  return (
    <>
      <h1>User 페이지</h1>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default UserMain;
