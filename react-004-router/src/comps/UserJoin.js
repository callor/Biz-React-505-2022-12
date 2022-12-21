import { useParams } from "react-router-dom";
const UserJoin = () => {
  const { username } = useParams();

  return (
    <>
      <h1>여기는 회원가입 화면입니다</h1>;<h3>username : {username} </h3>
    </>
  );
};
export default UserJoin;
