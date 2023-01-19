import { Outlet } from "react-router-dom";
import "./css/App.css";
import Nav from "./layout/nav";

function App() {
  return (
    <div className="App w3-container">
      <header className="App-header w3-padding-24">
        <h1>나의 도서 정보</h1>
        <p>네이버 openAPI 를 연동한 도서정보</p>
      </header>
      <Nav />
      <Outlet />
    </div>
  );
}

export default App;
