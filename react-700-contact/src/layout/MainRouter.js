import { createBrowserRouter } from "react-router-dom";
// App.js 에 선언 loader 함수를 AppLoader 함수 이름으로 import
import App, { loader as AppLoader } from "../App";
import ContactDetail, { loader as DetailLoader } from "../comps/ContactDetail";

const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: AppLoader,
    children: [
      {
        path: "",
        element: <h1>hello</h1>,
      },
      {
        path: "/detail/:uid",
        loader: DetailLoader,
        element: <ContactDetail />,
      },
    ],
  },
]);

export default MainRouter;
