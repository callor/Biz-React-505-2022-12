import "../css/ModalMain.css";
const ModalMain = (props) => {
  const { open, close, width, children } = props;
  return (
    <div className={open ? "Modal openModal" : "Modal"}>
      <section className={`section-${width}`}>
        <header>
          <h1>Header</h1>
          <button className="close" onClick={close}>
            &times;
          </button>
        </header>
        <main>{children}</main>
        <footer>
          <button className="close" onClick={close}>
            닫기
          </button>
        </footer>
      </section>
    </div>
  );
};

export default ModalMain;
