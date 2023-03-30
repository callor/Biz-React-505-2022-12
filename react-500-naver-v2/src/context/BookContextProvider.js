import { createContext, useContext, useState } from "react";
const BookContext = createContext();

export const useBookContext = () => {
  return useContext(BookContext);
};

export const BookContextProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [bookList, setBookList] = useState([]);
  const [pageNum, setPageNum] = useState(1);

  const naver_search = async () => {
    const queryString = `/api/book/search?search=${search}&page=${pageNum}`;
    console.log("query", queryString);
    const respo = await fetch(
      `/api/book/search?search=${search}&page=${pageNum}`
    );
    const result = await respo.json();
    if (!result?.CODE) {
      setBookList([...result]);
    }
    console.log(result);
  };

  const propsStore = {
    search,
    setSearch,
    bookList,
    setBookList,
    naver_search,
    setPageNum,
  };
  return (
    <BookContext.Provider value={propsStore}>{children}</BookContext.Provider>
  );
};
