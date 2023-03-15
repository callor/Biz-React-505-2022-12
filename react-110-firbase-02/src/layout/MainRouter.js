import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import EmailLogin from "../comps/EmailLogin";
import GoogleLogin from "../comps/GoogleLogin";
import UserMain from "../comps/UserMain";
import { useFirebaseContext } from "../provider/FirebaseProvider";

const MainRouterProvider = () => {
  const { loginUser } = useFirebaseContext();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { path: "todo", element: <h1>TODO</h1> },
        {
          path: "user",
          element: <UserMain />,
          children: [
            { path: "join", element: <h1>JOIN</h1> },
            {
              path: "login",
              element: (
                <>
                  {loginUser ? <></> : <EmailLogin />}
                  <GoogleLogin />
                </>
              ),
            },
            { path: "mypage", element: <h1>MY PAGE</h1> },
            { path: "logout", element: <h1>LOGOUT</h1> },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
export default MainRouterProvider;
