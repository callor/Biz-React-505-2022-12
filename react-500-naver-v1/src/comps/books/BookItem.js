const BookItem = (props) => {
  const { title, isbn, image, author, publisher } = props.book;
  const onClickHandler = () => {
    alert(isbn + " : ADD");
  };
  return (
    <li>
      <span className="w3-padding-16 w3-border book image">
        <img width="50px" height="50px" src={image} />
      </span>
      <span className="w3-text-blue w3-margin book title">{title}</span>
      <span className="book author">{author}</span>
      <span className="book publisher">{publisher}</span>
      <span className="book add" onClick={onClickHandler}>
        +
      </span>
    </li>
  );
};

export default BookItem;
