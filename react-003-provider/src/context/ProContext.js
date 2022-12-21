/**
 * 흩어져 있는 state 변수와 state 함수를 모아두는 store(저장소)
 * useState : state 변수를 관리하기 위한 도구
 * creaetContext : 저장소를 만드는 도구
 * useContext : store 에 저장된 state 들을 공급하는 역할
 */
import { useContext, createContext, useState } from "react";

// Pro** 컴포넌트들이 사용할 store 열기(개설)
const ProContext = createContext();

// store 에서 state 들을 공급할 함수(유저정의 hook 함수)를 정의하기
const useProContext = () => {
  return useContext(ProContext);
};

/**
 * state 변수, setState() 함수들을 만들고 관리하는 함수
 */
const ProContextProvider = ({ children }) => {
  const [nation, setNation] = useState("");
  const [nationList, setNationList] = useState([]);

  /**
   * state 변수와 setState() 함수들을 하나의 객체로 묶기
   */
  const props = {
    nation,
    setNation,
    nationList,
    setNationList,
  };
  /**
   * 컴포넌트 확장 방법을 사용하여
   * 우리가 만든 컴포넌트들과 Provider 를 하나의 그룹으로 묶어주기
   * 이때 각 컴포넌트들이 사용할 state 변수와
   *    setState() 함수를 value 속성에 담아놓는다
   */
  return <ProContext.Provider value={props}>{children}</ProContext.Provider>;
};
export { ProContextProvider, useProContext };
