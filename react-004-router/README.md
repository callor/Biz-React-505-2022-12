# React Routing, URL 처리

- React 에서 Routing, Nav, URL을 처리하는 방법에는 `react-router`, `React Page`, `nextJS` 등 있다.
- `React Page`, `nextJS` 는 기본 react project 와 달리 완전한 Framework 를 사용하는 방법 : project 를 생성하는 방법 자체가 다르다.
- `react-router` 를 사용방법은, 기존의 `create-react-app` 으로 생성한 프로젝트의 기본 구조를 변경하지 않고 작성할수 있는 방법

## dependency

- `npm install react-router` 또는 `npm install react-router-dom`
- `react-router` 는 full package 방식의 라이브러리이고, `react-router-dom` 는 nav 을 만드는데 초점이 맞춰진 최소화된 라이브러리이다.

## react-router-dom 을 사용한 Navigation 과 Router 구현

- nav 메뉴를 클릭하여 page 전환이 되더라도 화면 전체가 새로고침 되지 않는다.
- `SPA(single Page Application)` 이라고 한다.
- nav 가 구현되어 여러 페이지가 전환되며 보이지만 실제로는 한 페이지 처럼 작동되고, 전체 페이지가 새로고침 되지 않는다.
- `Nav(메뉴)` 컴포넌트와 페이지 전환에서 사용되는 `Routes` 들은 모두 `BrowserRouter` 로 감싸져 있어야 한다.
