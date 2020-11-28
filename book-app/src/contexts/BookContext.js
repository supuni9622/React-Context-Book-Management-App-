import React, {useState, createContext, useCallback} from 'react'

export const BookContext = createContext()

const BookContextProvider = ({children}) => {

    const [books, setBooks] = useState([
        {name :'The way of kings' , author: 'Patrick Thomson', id : 1},
        {name :'Twilight' ,author: 'Stephony Meyor', id : 2},
        {name :'Harry Potter', author: 'J.K Rowling', id : 3}
    ])

    const addBook = useCallback(
        (bookName, author) => {
            setBooks([...books, {name:bookName, author:author, id :  Math.random()*100}])
        },
        [setBooks,books]
    );

    const removeBook = useCallback(
        (id) => {
            setBooks(books.filter(book => book.id !== id));
        },
        [setBooks,books]
    );

    return (
       <BookContext.Provider value={{books, addBook, removeBook}}>
           {children}
       </BookContext.Provider>
    )
}

export default BookContextProvider
