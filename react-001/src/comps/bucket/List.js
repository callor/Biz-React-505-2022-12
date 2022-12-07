import Item from "./Item";

/**
 * props Drilling
 * bucketList 의 선택된 item을 삭제하기 위하여
 * Main.js 에서 삭제함수를 생성했다
 * 실제 이 함수는 Item.js 에서 사용하는 함수이다
 *
 * 현재 Comps 의 구조상 Item 을 List 가 감싸고 있고,
 * List 를 Main 이 감싸고 있는 Layout이다
 * Main 에서 생성된 함수를 Item 에서 사용하기 위해서는
 * List 에게 일단 전달하고, List 는 다시 Item 에게 전달해야 한다
 * List 입장에서는 사용하지 않을(사용할 필요가 없는) 함수를
 * 받아서 단순히 Toss 하는 일을 한다
 * Comps 들이 다단계로 겹쳐 있으면 이러한 현상이 매우 많이 발생한다
 *
 */
const List = (props) => {
  // const bucketList = props.bucketList;
  const { bucketList, bucketDelete, bucketUpdateView } = props;
  /**
   * 배열 state 데이터를 화면에 표현할때는
   * 반드시 각 item 에 UNIQUE 한 key 값이 있어야 한다
   * React 가 List 화면에 Rendering 할때 모든 데이터를 갱신하는 것이
   * 아니라, 변화가 있는 요소만 갱신하기 위해서 사용하는 값
   */
  const bucketTableList = bucketList?.map((bucket) => (
    <Item
      bucket={bucket}
      key={bucket.b_seq}
      bucketUpdateView={bucketUpdateView}
      bucketDelete={bucketDelete}
    />
  ));

  return (
    <table className="bucket list">
      <thead>
        <tr>
          <th>날짜</th>
          <th>시각</th>
          <th colSpan="2">Bucket</th>
        </tr>
      </thead>
      <tbody>{bucketTableList}</tbody>
    </table>
  );
};

export default List;
