//import _books from '../data/books.json';
import { useState, useEffect } from "react";
import instance from "./axios";

//const books = _books;

export const PageBooks = () => {
  const [rawBooks, setBooks] = useState([]);


  // !!!! need to useContext

  const loadBooks = async () => {
    setBooks((await instance.get("/books")).data);
    /** const _books = [];
    rawBooks.forEach(rawBook =>{
        const _book = {
            ...rawBook,
            userIsEditing: true
        }   
        _books.push(_book);
    })
    setBooks(_books); */
  }

  useEffect(() => {
    (async () => {
        loadBooks();        
    })();
  }, []);

  const handleDeleteBook = async (_book) => {
        try {
            const res = await instance.delete(`/books/${_book._id}`)
            if (res.status = 200) {
                await loadBooks();
                console.log(_book._id);
            }
        } catch (e) {
            console.error(`ERROR: ${e}`);
        }
    }


//----------

  return (
    <div className="pageBooks">
      <div className="books">
        <h2>There are {rawBooks.length} books</h2>
        {rawBooks.map((_book) => {
          return (
            <div className="info" key={_book._id}>
              <div className="book">
                    <div className="book-cover">
                        <img src={_book.img} alt="" />
                    </div>
                    <div className="content">
                        <div className="title">
                            <h2>{_book.title}</h2>
                        </div>
                        <div className="author">
                            <h5>{_book.author}</h5>
                        </div>
                        <div className="description">
                            <p>{_book.description}</p>
                        </div>
                        <div className="price">
                            <h4>Price: {_book.price} $</h4>
                        </div>
                        </div>
                        <div className="rest-info">
                        <div className="isbn">
                            <p>ISBN: {_book.ISBN}</p>
                        </div>
                        <div className="publicationDate">
                            <p>Public: {_book.puplication.split("T22:00:00.000Z")}</p>
                        </div>
                        <div className="category">
                            <p>Genre: {_book.category.join(", ")}</p>
                        </div>
                        <div className="age">
                            <p>Ab {_book.age} Jahren</p>
                        </div>
                        <div className="pages">
                            <p>Pages: {_book.pages}</p>
                        </div>
                    </div>
                </div>
                <div className="managePanel">
                    <div className="deleteButton">
                        <button onClick={() => handleDeleteBook(_book)}>Delete</button>
                    </div>
                </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};  
