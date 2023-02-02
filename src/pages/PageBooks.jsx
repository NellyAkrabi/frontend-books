//import _books from '../data/books.json';
import { useEffect, useContext } from "react";
import { DisplayBook } from "../../components/DisplayBook";
import { AppContext } from "../AppContext";

//const books = _books;

export const PageBooks = () => {
    const {
        rawBooks,
    } = useContext(AppContext);

  return (
    <div className="pageBooks">
      <div className="books">
        <h2>There are {rawBooks.length} books</h2>
        {rawBooks.map((_book) => {
          return (
           <div key={_book._id}>
              <DisplayBook book = {_book} />
           </div>
          );
        })}
      </div>
    </div>
  );
};  
