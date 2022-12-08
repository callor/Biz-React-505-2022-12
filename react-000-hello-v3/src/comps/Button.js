const Button = (props) => {
  /**
   * Component 의 props 중에 children 이라는 기본 속성이 있는데
   * 상위(parent) 에서 컴포넌트를 쌍이 있는 tag 처럼 사용하면서
   * tag 와 tag 사이에 끼워넣은 부분을 기본값으로 받는 속성
   */
  const { children, backgroundColor, color, buttonStyle } = props;
  //   const style = {
  //     backgroundColor: backgroundColor === "파랑" && "blue",
  //     color: color === "흰색" && "white",
  //   };
  const style = {
    backgroundColor: backgroundColor || "blue",
    color: color || "white",
  };

  /**
   * &&와 || 선택 연산자
   * 값1 && 값2 : 값1이 true 이면 값2 를 적용하라
   * 값1 || 값2 : 값1이 true 이면 값1을 적용하고,
   *        값1이 false 이면 값2를 적용하라
   */
  return <button style={buttonStyle || style}>{children}</button>;
};

export default Button;
