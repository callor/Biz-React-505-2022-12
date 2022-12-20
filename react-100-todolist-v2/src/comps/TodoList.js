import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const { todoContentList, todoDelete, todoComplete } = props;
  const todoListItemView = todoContentList.map((item) => {
    return (
      <TodoItem
        item={item}
        key={item.id}
        todoDelete={todoDelete}
        todoComplete={todoComplete}
      />
    );
  });
  return <div>{todoListItemView}</div>;
};
export default TodoList;
