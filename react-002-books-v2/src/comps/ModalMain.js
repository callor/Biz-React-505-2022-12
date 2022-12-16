import "../css/ModalMain.css";
const ModalMain = (props) => {
  const { header, open, close, width, children } = props;
  return (
    <div className={open ? "Modal openModal" : "Modal"}>
      <section className={`section-${width}`}>
        <header>
          {header}
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
