import { useState } from "react";
import BookList from "./BookList";
import BookSearchInput from "./BookSearchInput";
import CardMain from "../CardMain";
import "../../css/Book.css";

const BookMain = () => {
  return (
    <>
      <CardMain maxHeight="600px" width="70%" header={<BookSearchInput />}>
        <BookList />
      </CardMain>
    </>
  );
};

export default BookMain;
