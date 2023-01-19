import { createContext, useContext, useState, useEffect } from "react";
import { getMyBooks } from "../service/book.service";
import { useUserContext } from "./UserContextProvider";

const MyBookContext = createContext();

export const useMyBookContext = () => {
  return useContext(MyBookContext);
};

export const MyBookContextProvider = ({ children }) => {
  const [myBookList, setMyBookList] = useState([]);
  const { sessionUser } = useUserContext();
  useEffect(() => {
    const myBookFech = async () => {
      const result = await getMyBooks(sessionUser.username);
      console.log("MyBooks", result);
      if (result) setMyBookList([...result]);
    };
    myBookFech();
  }, [sessionUser]);

  const myBookAdd = (isbn) => {
    if (!sessionUser?.username) {
      alert("로그인을 다시 수행 하세요");
      return false;
    }
  };

  const props = { myBookList, setMyBookList };
  return (
    <MyBookContext.Provider value={props}>{children}</MyBookContext.Provider>
  );
};
