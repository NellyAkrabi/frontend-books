import { useContext } from "react";
import { AppContext } from "../src/AppContext";

export const DisplayBook = (props) => {
  const { handleDeleteBook } = useContext(AppContext);

  return (
    <div className="info">
      <div className="book" key={props.book._id}>
            <div className="book-cover">
                <img src={props.book.img} alt="" />
            </div>
            <div className="content">
                <div className="title">
                    <h2>{props.book.title}</h2>
                </div>
                <div className="author">
                    <h5>{props.book.author}</h5>
                </div>
                <div className="description">
                    <p>{props.book.description}</p>
                </div>
                <div className="price">
                    <h4>Price: {props.book.price} $</h4>
                </div>
                </div>
                <div className="rest-info">
                <div className="isbn">
                    <p>ISBN: {props.book.ISBN}</p>
                </div>
                <div className="publicationDate">
                    <p>Public: {props.book.puplication.split("T22:00:00.000Z")}</p>
                </div>
                <div className="category">
                    <p>Genre: {props.book.category.join(", ")}</p>
                </div>
                <div className="age">
                    <p>Ab {props.book.age} Jahren</p>
                </div>
                <div className="pages">
                    <p>Pages: {props.book.pages}</p>
                </div>
            </div>
      </div>

      <div className="managePanel">
        <div className="deleteButton">
          <button onClick={() => handleDeleteBook(props.book)}>Delete</button>
        </div>
      </div>
    </div>
  );
};
