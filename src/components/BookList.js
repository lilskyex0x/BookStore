import React from 'react';
import { useSelector } from 'react-redux';
import AddnewBook from './AddBook';
import Book from './Book';

const Books = () => {
  const books = useSelector((state) => state.books.books);

  return (
    <div className="book-container">
      <Book book={books} />
      <AddnewBook />
    </div>
  );
};

export default Books;
