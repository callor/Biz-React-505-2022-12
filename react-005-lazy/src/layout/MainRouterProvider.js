import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import App from "../App";
// import BBs from "../comps/BBs";
const BBs = lazy(() => import("../comps/BBs"));

const MainRouterProvider = () => {
  const mainRouter = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "",
          element: <h1>여기는 시작페이지</h1>,
        },
        {
          path: "bbs",
          element: (
            <Suspense>
              <BBs />
            </Suspense>
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={mainRouter} />;
};

export default MainRouterProvider;
