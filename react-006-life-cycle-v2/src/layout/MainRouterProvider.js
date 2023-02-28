import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import BBs from "../comps/BBs";
import BBsContextProvider from "../context/BBsContextProvider";

const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <h1>나의 홈페이지에 오신것을 환영합니다</h1>,
      },
      {
        path: "bbs",
        element: (
          <BBsContextProvider>
            <BBs />
          </BBsContextProvider>
        ),
      },
    ],
  },
]);

const MainRouterProvider = () => {
  return <RouterProvider router={mainRouter} />;
};
export default MainRouterProvider;
