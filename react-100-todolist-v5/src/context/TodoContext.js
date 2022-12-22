import { createContext, useContext, useState, useCallback } from "react";
import { InitData } from "../data/InitData";
import moment from "moment";

// TodoContext : store
const TodoContext = createContext();

// useTodoContext() : 공급자
const useTodoContext = () => {
  return useContext(TodoContext);
};

// store 관리자
const TodoContextProvider = ({ children }) => {
  const [todoContentList, setTodoContentList] = useState([]);
  const [todoContent, setTodoContent] = useState(InitData());

  const todoInsert = useCallback(
    async (t_content) => {
      const data = { ...InitData(), t_content };
      const fetchOption = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      try {
        const res = await fetch("/todo/insert", fetchOption);
        const result = await res.json();
        if (result.error) {
          alert(result.error);
          return false;
        } else {
          setTodoContentList([...result]);
        }
        setTodoContent({ ...InitData() });
      } catch (error) {
        console.log(error);
        alert("서버오류!!!");
      }
    },
    [setTodoContent, setTodoContentList]
  );

  const todoDelete = useCallback(async (uid) => {
    try {
      const res = await fetch(`/todo/delete/${uid}`, { method: "DELETE" });
      const result = await res.json();
      if (result.error) {
        alert(result.error);
        return false;
      } else {
        setTodoContentList([...result]);
      }
    } catch (err) {
      alert("전송오류!");
    }
  }, []);

  // const todoDelete = useCallback(
  //   (uid) => {
  //     const removeList = todoContentList.filter((item) => {
  //       return item.id !== uid;
  //     });
  //     setTodoContentList(removeList);
  //   },
  //   [setTodoContentList, todoContentList]
  // );

  const todoComplete = useCallback(
    (uid) => {
      const completeList = todoContentList.map((item) => {
        if (item.id === uid) {
          // 완료버튼을 클릭했을때
          // 완료일자, 시각이 세팅되어 있으면 clear, 그렇지 않으면 다시 세팅
          item.e_date = item.e_date ? "" : moment().format("YYYY[-]MM[-]DD");
          item.e_time = item.e_time ? "" : moment().format("HH:mm:ss");
        }
        return item;
      });
      setTodoContentList(completeList);
    },
    [setTodoContentList, todoContentList]
  );

  const todoEditor = (uid) => {
    // filter, map, forEach 등을 배열요소와 함께 처리하면
    // 결과가 한개뿐이더라도 요소가 한개인 배열이 된다.
    const editorList = todoContentList.filter((item) => {
      return item.id === uid;
    });
    // 얕은 복사
    // 객체의 성질때문에
    // 만약 어딘선가 todoContentList 의 요소중에 값이 변경되면
    // todoContent 데이터도 같이 변경되어 버린다
    // setTodoContent(editorList[0])

    // 깊은 복사
    // 객체 요소를 하나씩 추출하여 따로 복사를 한다,
    // state 변수들의 객체, 배열로 되어 있을때는 상당히 주의를 요한다.
    setTodoContent({ ...editorList[0] });
    console.log({ ...editorList[0] });
  };

  const props = {
    todoContent,
    setTodoContent,
    todoContentList,
    setTodoContentList,
    todoInsert,
    todoComplete,
    todoDelete,
    todoEditor,
  };
  return <TodoContext.Provider value={props}>{children}</TodoContext.Provider>;
};
export { TodoContextProvider, useTodoContext };
