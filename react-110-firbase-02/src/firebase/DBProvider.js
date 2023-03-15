import { createContext, useContext, useState } from "react";
// import { getFirestore, getDoc, doc, setDoc } from "firebase/firestore/lite";
import {
  getDatabase, // DB Referrence
  ref,
  get, //  findBy..
  push, // insert
  onValue, // select
  child, // ref/child 지정
  remove, // 삭제
  update, // 업데이트
} from "firebase/database";
import { firebaseApp } from "./FirebaseConfig";
import { useAuthContext } from "./AuthProvider";

const db = getDatabase(firebaseApp); //realtimeDB
// const db = getFirestore(firebaseApp); // fireStore
const docRef = ref(db, "/todoList");

const DBContext = createContext();

export const useDBContext = () => {
  return useContext(DBContext);
};

const TODO = {
  id: "",
  email: "",
  sdate: "",
  stime: "",
  content: "",
  edate: "",
  etime: "",
};

export const DBContextProvider = ({ children }) => {
  const { loginUser } = useAuthContext();
  const [todo, setTodo] = useState(TODO);
  const [todoList, setTodoList] = useState([]);

  // const childRef = child(docRef, loginUser.email.replace(/\./g, ","));

  // realDB
  const insertTodoList = async (todo) => {
    console.log(loginUser);
    await push(docRef, todo); // .set(todo);
  };

  const getTodoList = async () => {
    onValue(docRef, (data) => {
      /**
       * UNIQUE Key 값을 기준으로 한개의 content 가 tree 구조로 만들어져 있고
       * 그 데이터를 그대로 가져온다
       * 이 데이터를 분해하여 List 형태로 만들어야 한다
       */

      const resultList = data.val();
      console.log("onValue", resultList);
      // Object.keys() :
      //    JSON type 의 데이터에서 key 만 추출하여
      //    배열로 만드는 함수
      if (resultList) {
        const ids = Object.keys(resultList);
        const todoResult = ids.map((id) => {
          return { id, ...resultList[id] };
        });
        setTodoList([...todoResult]);
      } else {
        setTodoList([]);
      }
    });
  };

  const itemDelete = (id) => {
    remove(child(docRef, id)).then((data) => {
      console.log(data);
    });
  };

  const itemUpdate = (todo) => {
    update(
      child(docRef, todo.id)
        .update(todo)
        .then(() => console.log("Update OK"))
    );
  };

  // fireStore
  // const getTodoList = async () => {
  //   if (loginUser) {
  //     try {
  //       // fireStore 의 todoList Document 정보를 가져오기
  //       const docRef = await doc(db, "todoList"); // , loginUser?.email);
  //       // 실제 데이터 가져오기
  //       const result = await getDoc(docRef);
  //       if (result.exists()) {
  //         setTodoList([...result]);
  //       }
  //     } catch (e) {
  //       console.log(e.code);
  //     }
  //   }
  // };

  // fireStore
  //   const insertTodoList = async (todo) => {
  //     if (todo && todo?.email) {
  //       try {
  //         const docRef = doc(db, "todoList", loginUser.email);
  //         await setDoc(docRef, todo);
  //       } catch (e) {
  //         console.log(e);
  //       }
  //     }
  //   };

  const props = { todo, todoList, getTodoList, insertTodoList, itemDelete };

  return <DBContext.Provider value={props}>{children}</DBContext.Provider>;
};
