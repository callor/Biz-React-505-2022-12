const NaverBookList = (props) => {
  const { bookListData } = props;

  const bookListView = bookListData.map((book) => {
    return (
      <tr key={book.isbn}>
        <td>{book.isbn}</td>
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td>{book.publisher}</td>
      </tr>
    );
  });
  return (
    <table>
      <tbody>{bookListView}</tbody>
    </table>
  );
};
export default NaverBookList;
