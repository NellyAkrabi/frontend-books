import { useState } from "react";

export const EditBook = ({id, book }) => {
    const [tempBook, setTempBooks] = useState([]);

  return (
    <form className="editForm">
      <fieldset>
        <legend>Editing Book</legend>

        <div className="row">
          <label>Title</label>
          <div>
            <input
              
              value={book.title}
              type="text"
              onChange={(e)=> {
                setTempBooks(e.target.value)
              }}
            />
          </div>
        </div>

        <div className="row">
          <label>Author</label>
          <div>
            <input
              value={book.author}
              type="text"
              onChange={(e)=> {
                setTempBooks(e.target.value)
              }}
            />
          </div>
        </div>


        <div className="buttonRow">
          <button >Cancel</button>
          <button >Save</button>
        </div>
      </fieldset>
    </form>
  );
};
