import { User } from "../models/User";
// login 된 사용자 정보 가져오기
const getLoginUser = async () => {
  const response = await fetch("/api/user/session");
  const result = await response.json();
  console.log("Session", result);
  if (result?.CODE > 200) return null;
  return result;
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
  // if (result?.CODE_NUM === 400 && result?.SUB_CODE === "USERNAME") {
  //   alert(`${loginUser.username} 은 가입된 사용자가 아님`);
  // } else if (result?.CODE_NUM === 400 && result?.SUB_CODE === "PASSWORD") {
  //   alert(`비밀번호를 확인해 주세요`);
  // } else {
  //   return result;
  // }
  return result;
};

export const logout = async () => {
  if (window?.confirm("로그아웃을 할까요??"))
    return await fetch("/api/user/logout");
};

const Auth = { getLoginUser, setLogin };
export default Auth;
