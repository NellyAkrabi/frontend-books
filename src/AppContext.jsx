import { createContext } from "react";
import { useState, useEffect, useContext } from "react";
import instance from "./pages/axios";

export const AppContext = createContext();

export const AppProvider = ({children}) => {
    const [rawBooks, setBooks] = useState([]);

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
    };

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

    

    return (
        <AppContext.Provider value = {{
            rawBooks,
            handleDeleteBook,
        }}>
            {children}
        </AppContext.Provider>
    );
};