# React 프로젝트

- Reactjs.org 공식 사이트에서 말하는 React 의 장점, 특징은 가상DOM 과 관련된 이야기 들이다.
- 이러한 이야기들은 실제 내부적으로 작동되는 기술적인 부분들로, React Front 개발자 입장에서는 크게 관심 갖지 않아도 된다.
- React 개발자는 사용자에게 화면이 어떻게 그려질 것인가의 관심
- `화면(View, UI)과 연결된 state 변수` 만 관심을 가지면 된다.

## React state 변수

- 화면에 데이터를 표현할 때 사용할 변수
- React 는 state 변수의 값이 변경되는 것을 감지하여 화면을 ReRandering 한다.
- state 변수는 일반 변수처럼 만들수 없고, 일반 변수처럼 값을 직접 할당 할수 없다.

- 일반적인 JS 변수를 만드는 방법

```JS
    const num1 = 10;
    let num2 = 30
```

- React 에서 함수 방식으로 변수를 만드는 방법

```JS
    const [num1, setNum1] = useState(10);
    const [num2, setNum2] = useState(30);
```

- 일반적인 방법으로 변수에 값을 할당(재 저장)하는 방법

```JS
    num1 = 40; // 불가!! 위에서 num1 은 const 로 선언했기 때문
    num2 = 50; // let 로 선언했기 때문에 언제든지 값 변경(재 할당) 가능
```

- React 에서 state 변수에 값을 할당(재 저장)하는 방법

```JS
    setNum1(40); // num1 변수의 값을 40으로 변경(할당, 재 저장)
    setNum2(50);; // num2 변수의 값을 50으로 변경
    // num1 과, num2 는 const 로 변수를 선언했지만,
    // react 에서는 state 변수를 setState() 함수를 사용하여
    // 값을 재 할당 할수 있다
```

### React state 변수 사용상 중요한 요소

- state 로 선언된 변수의 값을 직접 변경하려고 시도하면 안된다

```JS
    const [nation,setNation] = useState("대한민국");
    nation = "우리나라"; // 절대 불가!!!
    setNation("우리나라"); // state 변수 값 변경
```

- state 변수는 항상 먼저 선언 되어야 한다.
- 컴포넌트 함수 시작점에서 제일 먼저 선언 되어야 한다

```JS
const App = ()=>{
    // state 변수 선언하는 곳
    const [num1,setNum1] = useState(10)
    const [nation, setNation] = useState("대한민국")
    return <div></div>
}
export default App
```
