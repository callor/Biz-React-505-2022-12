const Input = ({ nameChange }) => {
  const nameChangeHandler = (e) => {
    const st_name = e.target.value;
    // console.log(st_name);
    nameChange(st_name);
  };
  return (
    <input
      onChange={nameChangeHandler}
      name="st_name"
      placeholder="이름을 입력하세요"
    />
  );
};
export default Input;
