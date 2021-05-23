import React, { useEffect, useState } from 'react';
import {Container} from 'react-bootstrap';
import axios from 'axios';


 const PageBookList = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {

  axios.get('http://localhost:5000/books')

  .then((response) => {
    setBooks(response.data);
  });
}, []);

return (
  <div>
  {books.map((book) => (
    <Container book={book} />
   ) )}
   </div>
  
)
  }
export default PageBookList;

