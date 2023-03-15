# React and firebase 연동

- `npm install firebase` 설치

## 환경설정을 이용하여 firebase 연동 정보 보안 설정

- 프로젝트 터미널(bash shell)에서 `touch .env` 환경설정파일 만들기
- `.gitignore` 에 있는 확인
- 프로젝트를 `git push` 하여 `.env`파일이 없는 확인
- `.env` 파일에 API 등의 정보를 저장, JSON type 이 아니다.(주의)
- 모든 키 값은 `REACT_APP_` 로 시작된다. `키 = 값` 형식으로 구성
- `FirebaseConfig.js` 에서 연결하기

```js
export const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId,
};
```
