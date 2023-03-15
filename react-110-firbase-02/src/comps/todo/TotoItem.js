import {
  Card,
  CardContent,
  CardMedia,
  SvgIcon,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDBContext } from "../../firebase/DBProvider";

const TodoItem = ({ todo }) => {
  const { itemDelete } = useDBContext();
  const onClickDeleteHandler = (id) => {
    if (window.confirm("삭제할까요")) {
      itemDelete(id);
    }
  };

  return (
    <Card sx={{ maxWidth: 300, margin: "10px auto" }}>
      <CardMedia sx={{ height: 150 }} image="/images/todo_1.jpg" />
      <CardContent sx={{ textAlign: "left" }}>
        <Typography component="body2" variant="h5" gutterBottom>
          {todo.content}
        </Typography>
        <Typography
          onClick={() => onClickDeleteHandler(todo.id)}
          component="body2"
          variant="h5"
          sx={{ color: "red" }}
        >
          <SvgIcon component={DeleteIcon} inheritViewBox />
        </Typography>
        <Typography component="div">{todo.sdate}</Typography>
        <Typography component="div">{todo.stime}</Typography>
      </CardContent>
    </Card>
  );
};

export default TodoItem;
