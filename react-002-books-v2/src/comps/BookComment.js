const style = {
  padding: "8px",
  margin: "5px auto",
  display: "inline-block",
  width: "80%",
};

const BookComment = (props) => {
  const { b_isbn, b_title } = props.bookData;
  return (
    <>
      <p>
        {b_title} ({b_isbn}) 소감~~
      </p>
      <input style={style} placeholder="독서 소감을 입력하세요" />
    </>
  );
};
export default BookComment;
