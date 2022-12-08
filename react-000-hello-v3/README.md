# React 컴포넌트

- React 는 철저하게 view 에만 집중하는 라이브러리
- 심지어 데이터를 가져오고 핸들링하는 도구도 포함하지 않는다
- 만약 데이터를 Server 에서 가져오려면 fetch, axios 같은 도구를 사용해야 한다.
- "한번만들고 다시 사용하는 도구" 라는 개념이 매우 강하다

## React 컴포넌트 스타일링

- 일반적인 css 를 지정하기
- CSS module 방식
- SCSS, SASS 방식
- styled-components 방식

### 일반적인 css 지정방식에서 이름을 구분하여 충돌 방지

- `.App .container` : parent tag 에 `App` class 가 지정되고,  
  그 parent 에 포함된 요소중에서 `container` 클래스가 지정된 항목만 적용하기
- `nav.main ul` : `main` 클래스가 적용된 `nav` 이 감싸고 있는 `ul` tag 에만 적용하기

### CSS module 방식

- css 파일의 이름을 `컴포넌트.module.css` 로 명명하고,  
  컴포넌트에서 이름있는 import(`import style from "컴포넌트.module.css"`) 하여 사용하기
- 지정할때는 `` <tag className={ `${style.class}`}> `` 형식으로 사용
- 실제 작동할때는 React 에서 css Loader 가 작동되면서 고유한 이름의 class 로 변환된다.
- 같은 이름의 css class 가 있더라도 이름 충돌이 일어나지 않는다

### scss, sass 적용하기

- `yarn add node-sass` 로 dependency 설정, npm 은 python 의존성 관계로 사용 불가
