import {
  createContext,
  useContext,
  useRef,
  useCallback,
  useMemo,
  useState,
  useEffect,
} from "react";

const BBsContext = createContext();
export const useBBsContext = () => {
  return useContext(BBsContext);
};

const BBsContextProvider = ({ children }) => {
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
   */
  useEffect(() => {
    // componentDidMount
    // + componentDidUpdate(deps 로 설정된 state 변경될때)
    console.log(`counter set : ${counter}`);
    return () => {
      // componentWillUnMount
      console.log(`counter prevSet : ${counter}`);
    };
  }, [counter]);

  //   const counterClick = () => {
  //     console.log("CounterClick");
  //     setCounter(++count.current);
  //   };
  // 함수의 재 사용
  const onCounterClickHandler = useCallback(() => {
    console.log("CounterClick");
    setCounter(++count.current);
  }, []);

  // Context 에서 value 로 설정할 props 를 useMemo 로 묶으면
  // 변수, 함수를 선언하고 재사용 가능하다.
  const props = useMemo(
    () => ({
      username,
      book,
      counter,
      onCounterClickHandler,
    }),
    [username, book, counter, onCounterClickHandler]
  );

  return <BBsContext.Provider value={props}>{children}</BBsContext.Provider>;
};

export default BBsContextProvider;
