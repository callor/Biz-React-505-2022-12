// login 된 사용자 정보 가져오기
const getLoginUser = async () => {
  const response = await fetch("/api/user/session");
  const result = response.json();
  return result;
};

// export default { getLoginUser };

// const Auth = {getLoginUser}
// export default Auth
const Auth = { getLoginUser };
export default Auth;
