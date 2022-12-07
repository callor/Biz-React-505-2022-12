/**
 * props
 * 부모 컴포넌트에서 전달한 변수, 함수, 객체, 배열 등등 모든 요소를
 * 받는 시스템 속성(properties)
 * props 통해서 전달받은 모든 요소는 "Read Only" 이다
 */
// const Body = ( { std }) =>{
const Body = (props) => {
  const { std } = props;
  // 부모 컴포넌트로 부터 전달받은 요소는 절대 값을 변경 할수 없다
  // std.name = "이몽룡"
  return (
    <section>
      <p>이름 : {std.name} </p>
      <p>학과 : {std.dept}</p>
      <p>학년 : {std.grade}</p>
      <p>주소 : {std.addr}</p>
      <p>전화번호 : {std.tel}</p>
    </section>
  );
};
export default Body;
