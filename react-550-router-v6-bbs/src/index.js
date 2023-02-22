import React from "react";
import ReactDOM from "react-dom/client";
import MainRouterProvider from "./layout/MainRouter";
import "./css/index.css";
import { BBsContextProvider } from "./provider/BBsContext";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
    <BBsContextProvider>
      <MainRouterProvider />
    </BBsContextProvider>
  </React.StrictMode>
);
