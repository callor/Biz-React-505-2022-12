import { redirect, useLoaderData } from "react-router-dom";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

export const todoMainLoader = (params, loginUser) => {
  /**
   * 만약 login 된 사용자 정보(loginUser)가 있으면
   * loginUser 정보를 TodoMain의 useLoaderData() 를 통하여 loginUser 에 저장
   * 만약 그렇지 않으면 /user/login Link 로 화면 전환이 되면서
   * TodoMain 은 Rendering 되지 않는다
   */
  if (loginUser) return loginUser;
  else return redirect("/user/login?login=required");
};

const TodoMain = () => {
  // const { getTodoList } = useDBContext();
  // loader 가 return 한 실제 데이터
  const loginUser = useLoaderData();
  return (
    <>
      <TodoInput />
      <TodoList />
    </>
  );
};
export default TodoMain;
