# React 컴포넌트 생명주기

- React 컴포넌트들이 생성되고, 화면에 나타나고, 화면에서 사라지고, 컴포넌트가 메모리에서 소멸되는 과정
- Mount : 화면에 나타나는 것, UnMount : 화면에서 사라지기

## React 클래스형 생명주기

- 클래스형 생명주기는 각각의 주기마다 정해진 method 가 있다.
- constructor() : 생성자 - 컴포넌트가 생성될때
- render() : 컴포넌트를 화면에 그릴때
- componentDidMount() : 컴포넌트가 화면에 나타날때
- componentDidUpdate() : 컴포넌트 변화(state)가 있을때
- componentWillUnMount() : 컴포넌트가 화면에서 사라질때

## React 의 함수형 생명주기

- React 16.8.x 이상에서 hook 함수라는 이름으로 탄생한다
- useState() : state 변수를 생성할때
- useEffect() : 컴포넌트가 Mount 또는 UnMount 될때
- useEffect(cb(),[deps]) : deps 의 항목이 변경될때, 컴포넌트에 변화가 있을때
