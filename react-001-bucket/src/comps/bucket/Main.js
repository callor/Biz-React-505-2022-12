import { useState } from "react";
import List from "./List";
import Input from "./Input";
import "../../css/bucket.css";

import uuid from "react-uuid";
import moment from "moment";

const BucketMain = () => {
  // input 에서 입력한 문자열을 저장할 state 변수와 seq 선언
  const [bucket, setBucket] = useState({
    b_seq: null,
    b_content: "",
  });
  // bucketData 형식의 객체 배열 state(변수) 선언
  const [bucketList, setBucketList] = useState([]);

  /**
   * 입력된 bucket 내용을 bucketList 에 추가하는 함수
   */
  const bucketInsert = () => {
    // 새로운 값을 입력할때
    if (!bucket.b_seq) {
      setBucketList([
        ...bucketList,
        {
          b_seq: uuid(),
          b_date: moment().format("YYYY[-]MM[-]DD"),
          b_time: moment().format("HH:mm:ss"),
          b_content: bucket.b_content,
        },
      ]);
    } else {
      const updateBucketList = bucketList.map((item) => {
        if (item.b_seq === bucket.b_seq) {
          return { ...item, b_content: bucket.b_content };
        }
        return item;
      });
      setBucketList([...updateBucketList]);
    }
    // 새로운 값을 입력할 수 있도록 seq 값을 clear
    setBucket({ ...bucket, b_seq: null });

    // 배열에 bucket 추가하기
    // React 는 절대 사용하면 안되는 코드
    // bucketList.push(bucket);

    // 원래있던 bucketList 와 새로운 bucket을 Concat(결합)하여
    // 새로운 배열을 만들고, setBucketList 함수에게 전달하여
    // bucketList 를 갱신하기
  }; // end insert

  /**
   * bucketList 배열에서 seq 값에  해당하는 데이터만 제외한
   * 새로운 배열 만들기
   */
  const bucketDelete = (seq) => {
    const newBucketList = bucketList.filter((bucket) => {
      return bucket.b_seq !== seq;
    });
    // setBucketList(newBucketList)
    setBucketList([...newBucketList]);
  }; // end delete

  const bucketUpdateView = (seq, content) => {
    // bucket state 변수 중에 b_seq, b_content 만 변경하기
    setBucket({ ...bucket, b_seq: seq, b_content: content });
  };

  return (
    <div className="bucket main">
      <Input
        bucketInsert={bucketInsert}
        bucket={bucket}
        setBucket={setBucket}
      />
      <List
        bucketList={bucketList}
        bucketUpdateView={bucketUpdateView}
        bucketDelete={bucketDelete}
      />
    </div>
  );
};

export default BucketMain;
