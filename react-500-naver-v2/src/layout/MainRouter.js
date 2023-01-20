import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Home from "../comps/Home";
import BookMain from "../comps/books/BookMain";
import MyBookMain from "../comps/mybook/MyBookMain";
import UserMain from "../comps/users/UserMain";
import UserJoin from "../comps/users/UserJoin";
import UserLogin from "../comps/users/UserLogin";
import UserLogout, { userLogoutSend } from "../comps/users/UserLogout";

/**
 * 각 path 에는 loader 라는 속성을 부여 할수 있다
 * loader 속성에 함수를 지정하면
 * path(메뉴)클릭했을때 component 를 보여주기 전에
 * 먼저 함수를 실행 해 준다
 */

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "books", element: <BookMain /> },
      { path: "books/mybook", element: <MyBookMain /> },
      {
        path: "user",
        element: <UserMain />,
        children: [
          { path: "login", element: <UserLogin /> },
          { path: "join", element: <UserJoin /> },
          {
            path: "logout",
            element: <UserLogout />,
            loader: () => {
              userLogoutSend();
              return "LOGOUT";
            },
          },
          { path: "mypage", element: <h1>myPage</h1> },
          { path: "find/id", element: <h1>아이디 찾기</h1> },
          { path: "find/password", element: <h1>비밀번호 찾기</h1> },
        ],
      },
    ],
  },
]);

export default router;
