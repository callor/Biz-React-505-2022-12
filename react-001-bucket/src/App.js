import logo from "./logo.svg";
import "./css/App.css";
import "./css/main.css";

import BackImage from "./images/image_1.jpg";

import Nav from "./comps/Nav";
import Footer from "./comps/Footer";

import BucketMain from "./comps/bucket/Main";

/**
 * react 에서 기본으로 지원하는 CSS-in-JS
 * JS 코드에서 CSS 를 선언하고 style 로 지정하기
 *
 * 일반적으로 *.css 파일에 style 을 지정하고 import 를 하여
 * 사용하는데, 이때 style 이 Global 로 적용된다.
 * style 이 충돌하여 예기치 못한 Layout 혼란이 올수 있다
 *
 * Component 코드에서 css 를 JS 객체로 선언하고
 * 적용하면 현재 Component 에서만 적용되는 private CSS 를 구현할 수 있다
 */
const headerStyle = {
  backgroundImage: `url(${BackImage})`,
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "scroll",
  backgroundSize: "100% 200%",
};

const App = () => {
  return (
    <div className="App">
      <header style={headerStyle} />
      <Nav />
      <section className="main">
        <BucketMain />
      </section>
      <Footer />
    </div>
  );
};

export default App;
