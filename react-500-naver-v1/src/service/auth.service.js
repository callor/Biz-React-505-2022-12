import { User } from "../models/User";
// login 된 사용자 정보 가져오기
const getLoginUser = async () => {
  const response = await fetch("/api/user/session");
  const result = await response.json();
  if (result.CODE === 200) {
    return result.MSG;
  } else {
    return null;
  }
};

const setLogin = async (loginUser) => {
  const user = new User(loginUser.username, loginUser.password);
  console.log("USER", user);
  const fetchOption = {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch("/api/user/login", fetchOption);
  const result = await response.json();
  if (result.CODE == 200) {
    // 정상적으로 데이터가 왔다
    //   alert(JSON.stringify(result.MSG));
    // setSessionUser(result.MSG);
    return result.MSG;
  } else if (result.CODE === 401 && result.SUB_CODE === "USERNAME") {
    alert(`${loginUser.username} 은 가입된 사용자가 아님`);
  } else if (result.CODE === 401 && result.SUB_CODE === "PASSWORD") {
    alert(`비밀번호를 확인해 주세요`);
  }
  return null;
};

const logout = async () => {
  await fetch("/api/user/logout");
};

const Auth = { getLoginUser, setLogin };
export default Auth;
