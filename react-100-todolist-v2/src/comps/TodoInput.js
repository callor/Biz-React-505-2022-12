import { useState } from "react";
const TodoInput = (props) => {
  const { todoInsert } = props;
  const [todoContent, setTodoContent] = useState("");

  /**
   * 추가 button 을 클릭했을때 사용할 event
   */
  const onClickHander = () => {
    todoInsert(todoContent);
    setTodoContent("");
  };

  /**
   * input box 문자열을 입력할때 사용할 event
   */
  const onChangeHander = (e) => {
    const value = e.target.value;
    setTodoContent(value);
  };

  return (
    <div className="input">
      <input placeholder="TODO" onChange={onChangeHander} value={todoContent} />
      <button onClick={onClickHander}>추가</button>
    </div>
  );
};

export default TodoInput;
