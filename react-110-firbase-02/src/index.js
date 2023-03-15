import React from "react";
import ReactDOM from "react-dom/client";
import { AuthContextProvider } from "./firebase/AuthProvider";
import { DBContextProvider } from "./firebase/DBProvider";
import "./index.css";
import MainRouterProvider from "./layout/MainRouter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <DBContextProvider>
        <MainRouterProvider />
      </DBContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
