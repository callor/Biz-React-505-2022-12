import styled from "styled-components";

const ItemView = styled.li`
  width: 80%;
  margin: 0 auto;
  display: flex;
  cursor: pointer;

  &:hover span:nth-of-type(2) {
    opacity: 1;
  }
`;

const ContentBox = styled.span`
  flex: 5;
  .complete {
    text-decoration: line-through;
  }
`;

const DeleteBtn = styled.span`
  flex: 1;
  opacity: 0;
  transition: 0.7s;
`;

const TodoItem = (props) => {
  const deleteClickHander = () => {
    // alert(props.id);
    if (window.confirm(`${props.item} 삭제 확인!!`)) {
      props.todoDelete(props.id);
    }
  };

  const completeClickHandler = () => {
    props.todoComplete(props.id);
  };
  const compStyle = {
    // prettier-ignore
    textDecoration: props.complete 
        ? "line-through" 
        : "none",
    color: props.complete ? "#777" : "blue",
  };
  return (
    <ItemView>
      {/*  prettier-ignore  */}
      <ContentBox
        style={compStyle}
        onClick={completeClickHandler}
      >
        {props.item} {props.complete}
      </ContentBox>
      <DeleteBtn onClick={deleteClickHander}>&times;</DeleteBtn>
    </ItemView>
  );
};
export default TodoItem;
