import ProItem from "./ProItem";
import ProValue from "./ProValue";
import { useProContext } from "../context/ProContext";

/**
 * ProList 에서는 직접 nation state 를 사용할 필요가 없지만
 * ProItem 에게 전달하기 위하여 props 로 받고, toss 를 실행
 *
 * => ContextProvider 를 통해서 state 변수와 setState() 함수를 ProItem에서
 * 직접 store 에서 전달받음으로 ProList 는 중간에 toss 역할이 사라진다
 */
const ProList = () => {
  const { nationList } = useProContext();
  const nationListView = nationList.map((nation) => {
    return (
      <h3>
        <ProItem nation={nation} />
      </h3>
    );
  });

  return (
    <>
      <ProValue />
      {nationListView}
    </>
  );
};
export default ProList;
