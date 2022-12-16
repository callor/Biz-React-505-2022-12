const BookList = (props) => {
  const { bookListData, bookComment } = props;

  const clickHandler = (e) => {
    const target = e.target;
    if (target.tagName === "TD") {
      const tr = target.closest("TR");
      const b_isbn = tr.dataset.isbn;
      const b_title = tr.cells[1].textContent;
      bookComment({ b_isbn, b_title });
    }
  };

  const bookListView = bookListData.map((bookData) => {
    return (
      <tr key={bookData.b_isbn} data-isbn={bookData.b_isbn}>
        <td>{bookData.b_isbn}</td>
        <td>{bookData.b_title}</td>
        <td>{bookData.b_author}</td>
      </tr>
    );
  });

  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>ISBN</th>
            <th>도서명</th>
            <th>저자</th>
          </tr>
        </thead>
        <tbody onClick={clickHandler}>{bookListView}</tbody>
      </table>
    </div>
  );
};
export default BookList;
