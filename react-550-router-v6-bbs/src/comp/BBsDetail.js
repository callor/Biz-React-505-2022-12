import { useBBsContext } from "../provider/BBsContext";

const BBsDetail = () => {
  const { orderValue, filterValue } = useBBsContext();
  return (
    <>
      <h1>여기는 게시판 자세히 보기</h1>
      <p>{orderValue.eng}</p>
      <p>{filterValue.eng}</p>
    </>
  );
};

export default BBsDetail;
