import { useState } from "react";

const Inputs = () => {
  const [cats, setCats] = useState([{ ca_id: "", ca_title: "", ca_desc: "" }]);

  const catAdd = () => {
    setCats([...cats, { ca_id: "", ca_title: "", ca_desc: "" }]);
  };

  const catChange = (e, index) => {
    const list = [...cats];
    list[index][e.target.name] = e.target.value;
    setCats([...list]);
  };

  const catDelete = (index) => {
    const removeList = [...cats];
    removeList.splice(index, 1);
    setCats([...removeList]);
  };

  const catList = cats.map((cat, index) => {
    return (
      <>
        <div>
          <input
            name="ca_title"
            placeholder="카테고리 타이틀"
            value={cat.ca_title}
            onChange={(e) => {
              catChange(e, index);
            }}
          />
          <textarea
            name="ca_desc"
            value={cat.ca_desc}
            onChange={(e) => {
              catChange(e, index);
            }}
            placeholder="카테고리 설명"
          />
          <button onClick={(e, index) => catDelete(index)}>삭제</button>
        </div>
      </>
    );
  });
  return (
    <>
      {catList}
      <button onClick={catAdd}>추가</button>
    </>
  );
};

export default Inputs;
