import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "../App";
import BBsMain from "../comp/BBsMain";
import BBsDetail from "../comp/BBsDetail";
import ErrorPage from "./ErrorPage";
import BBsList, { loader as BBsListLoader } from "../comp/BBsList";
import { useBBsContext } from "../provider/BBsContext";

const MainRouterProvider = () => {
  const { orderValue, filterValue } = useBBsContext(); // or get it from context/custom hook

  const MainRouter = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        { path: "", element: <h1>여기는 Home 입니다</h1> },
        {
          path: "bbs",
          element: <BBsMain />,
          children: [
            {
              path: "",
              search: (search) => {
                search = prompt("Page");
              },
            },
            {
              path: ":pageNum",
              loader: async () =>
                await BBsListLoader({ values: { orderValue, filterValue } }),
              element: <BBsList />,
            },
            { path: "detail/:id", element: <BBsDetail /> },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={MainRouter} />;
};
export default MainRouterProvider;
