import { useCallback, useEffect, useRef, useState } from "react";

console.log("선언부");

/**
 * JS 코드의 Top Level Area
 * 여기는 전체적으로 사용하는 변수, 함수를 선언하는 곳
 * 물론 여기에서 어떤 코드를 실행할 수 도 있지만
 * 보통은 선언부만 작성을한다
 */
const clickHandler = () => {
  console.log("clickHander");
};

const BBs = () => {
  // comps header 의 코드들은 Top Down 방식으로 실행된다
  console.log("Comps Header");

  /**
   * state 변수는 변수값을 변화시키면 화면이 reRendering 된다
   * 코드를 실행하는 과정에서 값을 유지하면서 Rendering  을 방지하는
   * 목적으로 내부적으로 선언하여 사용하는 변수
   */
  const count = useRef(0);
  const [counter, setCounter] = useState(count.current);

  // useState 를 callback 으로 선언하기
  // callback 함수 끝에는 실제 값을 초기화 하는
  // return 이 있어야 한다
  const [username, setUserName] = useState(() => {
    console.log("username State");
    return "callor";
  });

  const [book, setBook] = useState(() => {
    console.log("Book State");
    return { title: "JS", author: "홍길동", price: 2000 };
  });

  /**
   * useEffect( cb,[deps])
   * deps 배열이 없으면 Mount 될때 한번만 실행된다
   */
  useEffect(() => {
    console.log("Effect 1번");
    return () => {
      console.log("Effect return");
    };
  }, []);

  /**
   * deps 배열이 있는 경우
   * deps 의 상태에따라 Effect() 가 달리 실행된다
   * return : 이전 상태가 UnMount 될때
   * 기본 cb : 상태가 Mount 될때 실행
   *
   * counter state 가 변경되었을때만 실행되는
   * 감시 event handler 역할을 수행한다
   * counter state 의 변수 값이 prev 값과 새로운 값이
   * 변화가 없으면 이 effect 는 실행되지 않는다
   */
  useEffect(() => {
    console.log(`counter set : ${counter}`);
    setCounter(1);
    return () => {
      console.log(`counter prevSet : ${counter}`);
    };
  }, [counter]);

  useEffect(() => {
    console.log("Book", book);

    /**
     * deps 값이 객체(Object), 배열등 일 경우
     * Effect 내부에서 해당 값을 SetState() 로
     * 변경하면 안된다
     * 그러면 useEffect() 가 무한 반복되는 현상이
     * 발생한다.
     *
     * 만약 객체를 deps 로 선언하고 SetState() 함수를
     * 사용하려면 객체의 각 요소를 모두 deps 에 분해해야한다
     */
    setBook((preBook) => ({ ...preBook, title: "JS" }));
    return () => {
      console.log("Book Pre", book);
    };
  }, [book.title, book.author, book.price]);

  const title = "JS";
  const author = "홍길동";
  useEffect(async () => {
    const res = await fetch(`/getlist/${title}/${author}`);
    const result = await res.json();
    setBook({ ...result });
  }, [title, author]);

  //   const counterClick = () => {
  //     console.log("CounterClick");
  //     setCounter(++count.current);
  //   };
  // 함수의 재 사용
  const onCounterClickHandler = useCallback(() => {
    console.log("CounterClick");
    setCounter(count.current);
  }, []);

  /**
   * setBook state 함수를 사용하여
   * book state 를 다시 Setting 하고 있다
   * 하지만 여기에서는 원래 title 인 JS 와
   * 새롭게 Setting 되는 title 은 같은 JS 이다
   * 그럼에도 불구하고 useEffect() 계속 실행되고 있다
   *
   * book 은 데이터 type 이 객체(Object) 이다
   * 값은 동일하지만 데이터가 저장되는 기억장소(주소)가
   * 계속 새롭게 만들어진다.
   * 이때 useEffect 는 값을 비교하지 않고 book 객체 자체를
   * 비교하여 주소변경을 state 가 변화되었다고 인식해 버린다
   *
   */
  const onBookClickHanlder = useCallback(() => {
    console.log("Book Click");
    setBook((preBook) => ({ ...preBook, title: "JS" }));
  });

  return (
    <>
      <h1>여기는 BBS 메인 화면</h1>
      <h2>{username}</h2>
      {console.log("Comps Body")}
      <h2 onClick={onCounterClickHandler}>Counter : {counter}</h2>
      <h2 onClick={onBookClickHanlder}>도서명 : {book.title}</h2>
    </>
  );
};
export default BBs;
