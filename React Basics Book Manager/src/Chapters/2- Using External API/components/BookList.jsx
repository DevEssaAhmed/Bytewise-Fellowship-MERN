import React from 'react';
import BookShow from './BookShow';

const BookList = ({ books, onDelete, onEdit }) => {
  const renderedBooks = books.map((book) => {
    return (
      <BookShow key={book.id} book={book} onEdit={onEdit} onDelete={onDelete} />
    );
  });
  return <div className='book-list'>{renderedBooks}</div>;
};

export default BookList;
