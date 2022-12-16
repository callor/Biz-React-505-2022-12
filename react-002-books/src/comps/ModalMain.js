import "../css/ModalMain.css";
const ModalMain = (props) => {
  const { open, children } = props;
  return (
    <div className={open ? "Modal openModal" : "Modal"}>
      <section>
        <header>
          <h1>Header</h1>
          <button className="close">&times;</button>
        </header>
        <main>{children}</main>
        <footer>
          <button className="close">닫기</button>
        </footer>
      </section>
    </div>
  );
};

export default ModalMain;
