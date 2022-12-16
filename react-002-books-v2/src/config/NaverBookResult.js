/* 
<tr>
<td>{book.title}</td>
<td>{book.link}</td>
<td>{book.image}</td>
<td>{book.author}</td>
<td>{book.discount}</td>
<td>{book.publisher}</td>
<td>{book.isbn}</td>
<td>{book.description}</td>
<td>{book.pubdate}</td>
</tr> 
*/

const NaverBookResult = {
  title, // 	책 제목
  link, // 	네이버 도서 정보 URL
  image, // 	섬네일 이미지의 URL
  author, // 	저자 이름
  discount, //	판매 가격. 절판 등의 이유로 가격이 없으면 값을 반환하지 않습니다.
  publisher, //	출판사
  isbn, //	ISBN
  description, //	네이버 도서의 책 소개
  pubdate, // 	출간일
};
