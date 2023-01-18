import { createContext, useContext, useState } from "react";
const BookContext = createContext();

export const useBookContext = () => {
  return useContext(BookContext);
};

export const BookContextProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [bookList, setBookList] = useState([]);

  const naver_search = async () => {
    const queryString = `/api/book/search?search=${search}`;
    console.log("query", queryString);
    const respo = await fetch(`/api/book/search?search=${search}`);
    const result = await respo.json();
    if (result.CODE === 200) {
      setBookList([...result.MSG]);
    }
    console.log(result);
  };

  const propsStore = {
    search,
    setSearch,
    bookList,
    setBookList,
    naver_search,
  };
  return (
    <BookContext.Provider value={propsStore}>{children}</BookContext.Provider>
  );
};
