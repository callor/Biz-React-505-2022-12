// import "../scss/Section.scss";
import "../sass/Section.sass";
const Section = (props) => {
  const { children } = props;

  return (
    <>
      <section className="container">{children}</section>
      <section className="container red">{children}</section>
      <section className="container box">{children}</section>
      <section className="container red circle"></section>
      <section className="container circle blue"></section>
    </>
  );
};
export default Section;
