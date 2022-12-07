const Item = (props) => {
  const { bucket, bucketDelete, bucketUpdateView } = props;

  const updateHandler = (e) => {
    const tr = e.target.closest("TR");
    const bucketId = tr.dataset.id;
    const content = e.target.textContent;
    bucketUpdateView(bucketId, content);
  };

  const deleteHander = (e) => {
    const tr = e.target.closest("TR");
    const bucketId = tr.dataset.id;
    if (window.confirm(`${bucketId} 를 삭제할까요`)) {
      bucketDelete(bucketId);
    }
  };

  return (
    <tr data-id={bucket.b_seq}>
      <td>{bucket.b_date}</td>
      <td>{bucket.b_time}</td>
      <td onClick={updateHandler}>{bucket.b_content}</td>
      <td className="delete" onClick={deleteHander}>
        &times;
      </td>
    </tr>
  );
};

export default Item;
