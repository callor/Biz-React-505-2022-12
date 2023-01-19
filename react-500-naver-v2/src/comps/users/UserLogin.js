import { useUserContext } from "../../context/UserContextProvider";

const UserLogin = () => {
  const { loginUser, setLoginUser, userLogin, inputRef } = useUserContext();
  const onChangHandler = (e) => {
    const { name, value } = e.target;
    /**
     * 계산된 property 를 활용하여
     * input tag 의 name 속성을 참조하여
     * 여러개의 input chang event 를 한개로 처리하기
     */
    // setLoginUser({...loginUser, username:"callor"})
    setLoginUser({ ...loginUser, [name]: value });
  };

  return (
    <div className="w3-container w3-padding-24 w3-center">
      <input
        ref={inputRef.usernameRef}
        name="username"
        value={loginUser.username}
        onChange={onChangHandler}
        placeholder="USERNAME"
        className="w3-input"
      />
      <input
        ref={inputRef.passworeRef}
        name="password"
        value={loginUser.password}
        onChange={onChangHandler}
        placeholder="PASSWORD"
        className="w3-input"
        type="password"
      />
      <button
        onClick={() => userLogin()}
        className="w3-button w3-margin-top w3-padding-16 w3-orange w3-block w3-round"
      >
        로그인
      </button>
    </div>
  );
};

export default UserLogin;
