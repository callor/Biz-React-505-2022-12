# React State(상태)

- state(상태 변수, 배열, 객체) 가 변경되면, 화면이 reRendering 된다.

## 일반적인 코드에서 UI 구성

- 화면에 무엇인가 표현을 하려면, 명령어나 함수등을 이용하여 원하는 곳에 데이터를 표현하는 코드를 작성했다
- 이러한 방식을 명령형 UI 구성이라고 한다.

```
// 어떤 부분에 대하여 코드를 작성할 것인가를 개발자가 알아야 한다.
const div = document.querySelector("div.num1")
div.textContent = 100
div.innerText = 100
div.innerHTML = "<p>100</p>"
```

## React style 의 UI 구성

- react 에서는 화면에 표현하고자 하는 데이터가 있으면 미리 화면 UI 를 만들어 두고, 변화되는 데이터를 state 에 담아(저장, 할당)주면 react 가 스스로 반응하여 화면을 재 구성한다.
- 상태(적) UI : 화면을 구현하는 코드, 명령을 직접 사용하지 않고 UI 와 데이터 변화 부분을 분리하여 생각하기
