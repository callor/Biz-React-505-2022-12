const StateList = (props) => {
  const { viewList } = props;
  const viewListTags = viewList.map((view) => {
    return <p>{view}</p>;
  });
  return <div className="listMain">{viewListTags}</div>;
};
export default StateList;
