import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ContainerCard from '../components/Card/Card';


const PageBookList = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {


    axios.get('http://localhost:5000/books')


      .then((response) => {

        setBooks(response.data);

      });

  }, []);

  const deleteBook = axios.delete('http://localhost:5000/books/${id}')
  


  return (
    <div>
      {books.map((book) => (
        <ContainerCard book={book}
        onClickDelete={()=>{ 
          deleteBook({
            url: `/books/${book.id}`
          })
        }
        }
        
        />
      ))}
    </div>

  )
}
export default PageBookList;

