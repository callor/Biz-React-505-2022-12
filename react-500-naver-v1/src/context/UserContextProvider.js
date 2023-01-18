import { createContext, useContext, useState, useEffect } from "react";
import { User } from "../models/User";
import authService from "../service/auth.service";

const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserContextProvider = ({ children }) => {
  const [loginUser, setLoginUser] = useState(new User());

  useEffect(() => {
    const user = authService.getLoginUser();
    if (user) {
      setLoginUser(user);
    } else {
      user = new User();
    }
  }, []);

  const userLogin = async () => {
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
    if (result.CODE < 300) {
      // 정상적으로 데이터가 왔다
      alert(JSON.stringify(result.MSG));
    } else if (result.CODE === 401 && result.SUB_CODE === "USERNAME") {
      alert(`${loginUser.username} 은 가입된 사용자가 아님`);
    } else if (result.CODE === 401 && result.SUB_CODE === "PASSWORD") {
      alert(`비밀번호를 확인해 주세요`);
    }
  };

  const props = { loginUser, setLoginUser, userLogin };
  return <UserContext.Provider value={props}>{children}</UserContext.Provider>;
};
