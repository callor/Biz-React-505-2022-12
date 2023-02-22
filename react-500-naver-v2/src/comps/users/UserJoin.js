import { useUserContext } from "../../context/UserContextProvider";

const UserJoin = () => {
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
      <input
        name="re_password"
        value={loginUser.password}
        onChange={onChangHandler}
        placeholder="비밀번호 확인"
        className="w3-input"
        type="password"
      />

      <input
        name="u_name"
        value={loginUser.u_name}
        onChange={onChangHandler}
        placeholder="실제 이름"
        className="w3-input"
      />
      <input
        name="u_nickname"
        value={loginUser.u_nickname}
        onChange={onChangHandler}
        placeholder="별명"
        className="w3-input"
      />
      <input
        name="u_email"
        value={loginUser.u_email}
        onChange={onChangHandler}
        placeholder="Email"
        type="email"
        className="w3-input"
      />
      <input
        name="u_tel"
        value={loginUser.u_tel}
        onChange={onChangHandler}
        placeholder="전화번호"
        className="w3-input"
        type="phone"
      />
      <input
        name="u_addr"
        value={loginUser.u_addr}
        onChange={onChangHandler}
        placeholder="주소"
        className="w3-input"
      />

      <button className="w3-button w3-margin-top w3-padding-16 w3-orange w3-block w3-round">
        회원가입
      </button>
    </div>
  );
};

export default UserJoin;
