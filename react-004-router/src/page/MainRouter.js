import { Routes, Route } from "react-router-dom";
import NotFound from "./NotFound";
import {
  BBsMain,
  NoticeMain,
  NoticeList,
  NoticeWrite,
  UserMain,
  UserLogin,
  UserJoin,
} from "../comps/Index";
const MainRouter = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<h1>홈페이지</h1>}></Route>
        <Route path="/notice" element={<NoticeMain />}>
          <Route index element={<NoticeList />} />
          <Route path="write" element={<NoticeWrite />} />
        </Route>
        <Route path="/bbs" element={<BBsMain />}></Route>
      </Route>
      <Route path="/user" element={<UserMain />}>
        <Route path="login" element={<UserLogin />}></Route>
        <Route path="join" element={<UserJoin />}></Route>
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};
export default MainRouter;
