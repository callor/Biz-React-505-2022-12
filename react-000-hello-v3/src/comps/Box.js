import boxStyle from "../css/Box.module.css";
const Box = (props) => {
  const { children } = props;
  return <div className={`${boxStyle.container}`}>{children}</div>;
};

export default Box;
