const StateInput = (props) => {
  const { viewList, setViewList } = props;

  /***
   * 일반적인 명령형 UI(Vanila JS) 에서는
   * event 핸들러에서 화면에 접근하여 데이터를 표현하는 코드가 필요하다
   * 1. selector 를 수행하고
   * 2. createElement 를 수행하여 내용을 완성하고
   * 3. selector 에 append 수행하기
   */
  // const onKeyDownhandler = (e) => {
  //   const value = e.target.value;
  //   if (e.keyCode === 13) {
  //     const listMain = document.querySelector("div.listMain");
  //     const listItem = document.createElement("p");
  //     listItem.classList.add("listItem");
  //     listItem.textContent = value;
  //     listMain.appendChild(listItem);
  //   }
  // };
  /**
   * react style UI 구현 : 선언형 UI 구현이라고 한다
   * 특징 : 화면을 구현하는 부분과, 데이터를 변화시켜주는 부분의 코드가
   *      전혀 연관이 없어 보인다
   *      UI 추상화
   * 화면구현와 실제 데이터변화를 연결하여 원하는 UI 를 만들어내기
   * react 에서는 queurySelector, createElement 등을 사용하여 화면을 구현하는 것을
   * 될수 있으면 사용하지 말라고 한다.
   *
   * 1. react 에서는 실제(real) DOM 과 가상(virtule) DOM 이 동시에 존재를 한다.
   * 2. querySelector(getElement...) 등을 사용하여 DOM 을 선택하면
   * 3. 선택된 DOM 이 실제 DOM 인지 가상 DOM 인지 개발자가 선택할 수 없다.
   * 4. 실제 DOM 을 선택했더라도 react 엔진은 state 변수를 감시하고 있다가
   * 5. 개발자의 의도와 상관 없이 화면을 reRendering 할 것이고 그 과정에서 여러 문제가
   *    발생할수 있다.
   * 6. 화면에 무엇인가 변화를 주고 싶다 = 반드시 state 를 변화시켜라
   *
   */
  const onKeyDownhandler = (e) => {
    const value = e.target.value;
    if (e.keyCode === 13) setViewList([...viewList, value]);
  };
  return <input onKeyDown={onKeyDownhandler}></input>;
};

export default StateInput;
