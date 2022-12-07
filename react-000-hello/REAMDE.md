# 처음 시작하는 React Project

## React Project 를 위한 Dependencies

- babel : 오래된 브라우저에서 새로운 JS 코드(ECMASCRIPT ES6+)를 실행할수 있도록 변환하는 도구

```
 npm install -D @babel/core
 npm install -D @babel/preset-env
 npm install -D @balel.preset-react
 npm install -D @babel/core @babel/preset-env @babel/preset-react
```

- webpack : 번들러, 많은 html, css, js 등등의 파일을 압축하여 배포하는 도구

```
npm install -D webpack webpack-cli webpack-dev-server
```

- babel-loader : ES6 를 ES5 로 바궈주는 도구, webpack 에서 사용
- html-loader : webpack 에서 html 코드를 인식할수 있게 하는 도구
- html-webpack-plugin : webpack 에서 사용하는 보조 도구

```
npm install -D babel-loader html-loader html-webpack-plugin
```

### 설정파일 만들기

```
touch .babelrc
```

- 바벨 설정파일 작성하기

```
.babelrc 파일에 다음 내용 추가
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```
