import "../css/NaverBookList.css";

const NaverBookList = (props) => {
  const { bookListData } = props;

  const bookListView = bookListData.map((book) => {
    return (
      <tr key={book.isbn}>
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td>{book.publisher}</td>
      </tr>
    );
  });
  return (
    <table className="Naver">
      <tbody>{bookListView}</tbody>
    </table>
  );
};
export default NaverBookList;
