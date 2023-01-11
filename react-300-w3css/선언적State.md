# React 에서는 화면에 변화를 주는 데이터는 모두 state 이다

- Vanila JS 에서는 selector 를 선택하고 textContent, innerHTML, InnerText 속성에 값을 세팅하여 화면에 내용이 나타나도록 구현한다.
- React 에서는 무엇이든지 화면에 변화를 주는 데이터는 모두 state 로 처리한다.

## React 에서 input의 처리

- html 에서 input tag 는 키보드로 문자열을 입력할수 있는 속성을 갖는다.
- html 에서는 아무런 효과를 넣지 않아도 자연스럽게 키보드로 문자열을 입력할수 있다
- 하지만 React 에서는 반드시 input tag 와 text 성질의 state 변수가 연동되어야 한다.
- input tag 의 value 속성에 state 변수를 부착하여 state 값을 화면에 보여주는 것이 필요하다
- react 에서는 state 변수의 값이 input box 에 보여지는 것이다

1. input box 에 text 를 입력하고 enter 를 눌렀을때
2. JS 에서는 input box 의 event 로 부터 value 값을 추출하고
3. 그 추출된 값을 다른 함수에 전달하여 insert 등등을 처리한다
4. React 에서는 input box 의 value 값을 추출하는 코드가 없다
