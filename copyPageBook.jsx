<div>


<form>
        <fieldset>
            <legend>Editing Book</legend>

            <div className="row">
                <label>Title</label>
                <div>
                    <input 
                        value={book.editItem.title}
                        type="text"
                        onchange = {(e) => handleChangeFormField(
                            e.target.value,
                            book,
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
                            book,
                            'author'
                        )}/>
                </div>
            </div>

            <div className="buttonRow">
                <button onClick={()=> handleTooggleEditStatus(book)}>Clear</button>
                <button disabled>Save</button>
            </div>

        </fieldset>
    </form>




</div>