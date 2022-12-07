import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";
const AppWithCallback = () => {
  return <App tab="home" />;
};
const rootContainer = document.querySelector("#root");
const root = createRoot(rootContainer);
root.render(<AppWithCallback />);
