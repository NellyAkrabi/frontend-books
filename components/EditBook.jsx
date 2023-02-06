import { useContext } from "react"
import { AppContext } from "../src/appContext"

export const EditBook = ({book}) => {
   const { books, handleChangeFormField, handleTooggleEditStatus } = useContext(AppContext);

   return (
    <form>
        <fieldset>
            <legend>Editing Book</legend>

            <p>editing book {book.title} </p>

            <div className="row">
                <label>Title</label>
                <div>
                    <input 
                        value={book.editItem.title}
                        type="text"
                        onchange = {(e) => handleChangeFormField(
                            e.target.value,
                            books,
                            'title'
                        )}/>
                </div>
            </div>

            <div className="row">
                <label>Author</label>
                <div>
                    <input 
                        value={book.editItem.author}
                        type="text"
                        onchange = {(e) => handleChangeFormField(
                            e.target.value,
                            books,
                            'author'
                        )}/>
                </div>
            </div>

            <div className="row">
                <label>Description</label>
                <div>
                    <input 
                        value={book.editItem.description}
                        type="text"
                        onchange = {(e) => handleChangeFormField(
                            e.target.value,
                            books,
                            'description'
                        )}/>
                </div>
            </div>

            <div className="row">
                <label>ImageURL</label>
                <div>
                    <input 
                        value={book.editItem.img}
                        type="text"
                        onchange = {(e) => handleChangeFormField(
                            e.target.value,
                            books,
                            'img'
                        )}/>
                </div>
            </div>

            <div className="row">
                <label>Price</label>
                <div>
                    <input 
                        value={book.editItem.price}
                        type="number"
                        onchange = {(e) => handleChangeFormField(
                            e.target.value,
                            books,
                            'price'
                        )}/>
                </div>
            </div>

            <div className="row">
                <label>Age</label>
                <div>
                    <input 
                        value={book.editItem.age}
                        type="number"
                        onchange = {(e) => handleChangeFormField(
                            e.target.value,
                            books,
                            'number'
                        )}/>
                </div>
            </div>

            <div className="row">
                <label>Pages</label>
                <div>
                    <input 
                        value={book.editItem.pages}
                        type="number"
                        onchange = {(e) => handleChangeFormField(
                            e.target.value,
                            books,
                            'pages'
                        )}/>
                </div>
            </div>
            

            <div className="buttonRow">
                <button onClick={()=> handleTooggleEditStatus(book)}>Clear</button>
                <button disabled>Save</button>
            </div>

        </fieldset>
    </form>

   )
};