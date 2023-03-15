import { Container, TextField } from "@mui/material";
import { useState } from "react";
import { useDBContext } from "../../firebase/DBProvider";
import moment from "moment";
import { useAuthContext } from "../../firebase/AuthProvider";

const TodoInput = () => {
  const { loginUser } = useAuthContext();
  const { insertTodoList } = useDBContext();
  const [content, setContent] = useState();
  const onChangeHandle = (e) => {
    setContent(e.target.value);
  };

  const onKeyDownHandler = (e) => {
    if (e.keyCode === 13) {
      // alert(`안녕 ${content}`);
      const todo = {
        email: loginUser?.email,
        sdate: moment().format("YYYY[-]MM[-]DD"),
        stime: moment().format("HH:mm:ss"),
        content: content,
        edate: "",
        etime: "",
      };
      insertTodoList(todo);
    }
  };
  return (
    <Container maxWidth="xl" fixed sx={{ margin: "60px auto" }}>
      <div>
        <TextField
          fullWidth
          variant="outlined"
          label="TODO 입력 후 Enter"
          placeholder="할일을 입력한 후 Enter를 눌러 주세요..."
          value={content}
          onChange={onChangeHandle}
          onKeyDown={onKeyDownHandler}
        />
      </div>
    </Container>
  );
};

export default TodoInput;
