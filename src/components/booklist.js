import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BookCard from './bookcard';

export default function BookList() {
    const [books, setBooks] = useState([]);
  
    useEffect(() => {
      axios
        .get('https://exam-backend-3ujm.onrender.com/book')
        .then((res) => {
          setBooks(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);

    const deleteBook = (id) => {
      axios
        .delete('https://exam-backend-3ujm.onrender.com/book' + id)
        .then((response) => {
          console.log(response.data);
        });
  
        setBooks(books.filter((el) => el._id !== id));
    };
  
    const bookList =
      books.length === 0
        ? 'there is no book record!'
        : books.map((book, k) => <BookCard book={book} key={k} keyId={book._id} deleteBook={deleteBook}/>);
  
    return (
      <div className='BookList'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <br />
              <h2 className='display-4 text-center'>Books List</h2>
            </div>
  
            <div className='col-md-11'>
              <Link
                to='/create-book'
                className='btn btn-outline-warning float-right'
              >
                + Add New Book
              </Link>
              <br />
              <br />
              <hr />
            </div>
          </div>
  
          <div className='list'>{bookList}</div>
        </div>
      </div>
    );
  }