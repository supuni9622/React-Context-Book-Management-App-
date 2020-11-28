import React, { createContext, useEffect, useReducer} from 'react';
import {bookReducer} from '../Reducers/BookReducer'

export const BookContext = createContext()

const BookContextProvider = ({children}) => {

    // const [books, setBooks] = useState([
    //     {name :'The way of kings' , author: 'Patrick Thomson', id : 1},
    //     {name :'Twilight' ,author: 'Stephony Meyor', id : 2},
    //     {name :'Harry Potter', author: 'J.K Rowling', id : 3}
    // ])

    // Replace useState with useReducer

    // Reducer function pass 2 arguments --> bookReducer function and initial values 
    // const [books, dispatch] = useReducer(bookReducer,[
    //     {name :'The way of kings' , author: 'Patrick Thomson', id : 1},
    //     {name :'Twilight' ,author: 'Stephony Meyor', id : 2},
    //     {name :'Harry Potter', author: 'J.K Rowling', id : 3}
    // ])

    // const addBook = useCallback(
    //     (bookName, author) => {
    //         setBooks([...books, {name:bookName, author:author, id :  Math.random()*100}])
    //     },
    //     [setBooks,books]
    // );

    // const removeBook = useCallback(
    //     (id) => {
    //         setBooks(books.filter(book => book.id !== id));
    //     },
    //     [setBooks,books]
    // );

    // Covert these functions (addBook, removeBook) to the reducer funtion.

     // Use local storge  ---- When we use context state - it will not store when we add some data. But we can keep that data using local storage even after refreshing
     const [books, dispatch] = useReducer(bookReducer,[], () => {
         const localData = localStorage.getItem('books');
         return localData ? JSON.parse(localData) : []
     });

     useEffect(()=> {
        localStorage.setItem('books', JSON.stringify(books))
     },[books])

    return (
       <BookContext.Provider value={{books, dispatch}}>
           {children}
       </BookContext.Provider>
    )
}

export default BookContextProvider
