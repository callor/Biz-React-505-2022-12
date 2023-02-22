import { createContext, useContext, useState, useCallback } from "react";

// store
const BBsContext = createContext();

// 공급자
const useBBsContext = () => {
  return useContext(BBsContext);
};

// select option
const orderList = [
  { o_eng: "latest", o_kor: "최신순" },
  { o_eng: "upvotes", o_kor: "추천순" },
  { o_eng: "replies", o_kor: "댓글순" },
  { o_eng: "views", o_kor: "조회순" },
];
const filterList = [
  { s_eng: "title_content", s_kor: "제목+내용" },
  { s_eng: "title", s_kor: "제목" },
  { s_eng: "content", s_kor: "내용" },
  { s_eng: "nickname", s_kor: "닉네임" },
  { s_eng: "reply", s_kor: "댓글" },
];

const initOrder = () => {
  const order = {
    eng: `${orderList[0].o_eng}`,
    kor: `${orderList[0].o_kor}`,
  };
  return order;
};

const initFilter = () => {
  const filter = {
    eng: `${filterList[0].s_eng}`,
    kor: `${filterList[0].s_kor}`,
  };
  return filter;
};

const BBsContextProvider = ({ children }) => {
  const [orderValue, setOrderValue] = useState(initOrder);
  const [filterValue, setFilterValue] = useState(initFilter);
  const [searchInput, setSearchInput] = useState("");

  const props = {
    orderList,
    filterList,
    orderValue,
    setOrderValue,
    filterValue,
    setFilterValue,
    searchInput,
    setSearchInput,
  };
  return <BBsContext.Provider value={props}>{children}</BBsContext.Provider>;
};

export { BBsContextProvider, useBBsContext };
