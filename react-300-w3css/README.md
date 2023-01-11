# 3rd css 를 사용한 UI 구현

- w3schools.com 에 제공하는 w3css.css 를 사용하여 UI 구현
- html 환경에서 w3ccs.css 를 사용하는 방법에는 2가지가 있다. 한가지는 직접 다운로드를 받아서 사용하는 방법, 또 한가지는 cdn 을 이용하는 방법이 있다
- React 에서는 cdn 을 이용하는 방법은 가급적 사용하지 말기 권한다

## CDN 을 이용하여 css, js 를 연결하는 방법

- 보통은 css 나 js 는 로컬 프로젝트의 폴더에 파일을 작성하여 연결하여 사용한다
- 3rd LIB 를 사용하는 경우는 CDN(Content Download Network)를 이용하여 http Link 를 설정하여 연결하는 방법
- 이방법은 사용자(client)가 웹페이지에 접속할때 CDN 을 제공하는 곳으로 부터 Brower 에 다운로드하여 사용하는 방법
- 프로젝트 자체에는 파일이 없는 상태
- 네트워크 품질이 좋으면 큰문제가 없으나, 네트워크 상태가 좋지 않으면 처음화면에서 딜레이가 발생하기도 한다

## React 에서 CDN 를 사용하지 말기를 권하는 이유

- React 는 서버로 부터 JS 코드를 다운로드 받아서 Browser 에서 JS 코드를 실행하고, 화면을 그려내는 구조이다
- CDN 을 연결하면 JS 코드가 외부의 Css, JS 파일을 다운로드 받는데 상당한 부담을 갖게 된다.

## css 를 좀더 쉽게 구현하기 위하여 styled-components

```
npm install styled-components
```

- component 와 style 을 통합하여 구현할수 있는 도구
