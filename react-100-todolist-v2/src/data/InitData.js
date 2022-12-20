import moment from "moment";
import uuid from "react-uuid";

const InitData = () => {
  const TodoData = {
    id: uuid(),
    s_date: moment().format("YYYY[-]MM[-]DD"),
    s_time: moment().format("HH:mm:ss"),
    t_content: "todoList 작성하기",
    e_date: "",
    e_time: "",
  };
  return TodoData;
};
console.log(InitData);
export { InitData };
