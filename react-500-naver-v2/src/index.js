import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./css/index.css";
import ProviderMain from "./context/ProviderMain";
import MainRouter from "./layout/MainRouter";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
    <ProviderMain>
      <RouterProvider router={MainRouter} />
    </ProviderMain>
  </React.StrictMode>
);
