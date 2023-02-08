import { createContext } from "react";
import { useState, useEffect } from "react";
import { EditBook } from "../components/EditBook";
import instance from "./pages/axios";

export const AppContext = createContext();

export const AppProvider = ({children}) => {
    const [rawBooks, setRawBooks] = useState([]);
    const [editBook, setEditBook] = useState (false)

    const loadBooks = async () => {
        const books = (await instance.get("/books")).data;
        const _books = [];
        books.forEach(rawBook =>{
            const _book = {
                ...rawBook,
            }   
            _books.push(_book);
        
        })
        setRawBooks(_books);
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

    const handleEditBook = (_book) => {
        console.log(_book);
        setEditBook(true)
    }
    
    
    return (
        <AppContext.Provider value = {{
            rawBooks,
            editBook,
            handleDeleteBook,
            handleEditBook
        }}>
            {children}
        </AppContext.Provider>
    );
};