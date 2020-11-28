import React, {useContext, useState, useCallback, useEffect} from 'react'
import {ThemeContext } from '../contexts/ThemeContext';
import {BookContext} from '../contexts/BookContext';
import NewBookForm from './NewBookForm';
import BookDetails from './BookDetails';

const BookList = () => {

    const {isLightTheme, dark, light} = useContext(ThemeContext);
    const {books} = useContext(BookContext);

    const theme = isLightTheme ? light : dark;

    // const [books, setBooks] = useState([
    //     {name :'The way of kings' , id : 1},
    //     {name :'Twilight' , id : 2},
    //     {name :'Harry Potter' , id : 3}
    // ])

    // const addBook = useCallback(
    //     (bookName) => {
    //         setBooks([...books, {name:bookName, id :  Math.random()*100}])
    //     },
    //     [setBooks,books]
    // );
    
    // If we use useEffect without empty array as dependency it will run every time component render or data updated
    // If we add empty array dependency it will run in the initial render

    // useEffect(()=> {
    //     console.log("UseEffect run ", books)
    // },[])

    return (
        <>
            {books.length ? 
                <div className='book-list' style={{background: theme.bg, color: theme.syntax}}>
                    <ul>
                        {books.map((book)=> {
                            return(<BookDetails book={book} key={book.id}/>)
                        })}
                    </ul>
                </div>
                :
                <div className='empty'  style={{background: theme.bg, color: theme.syntax}}>
                   <p> No books to read at this time</p>
                </div>
            }
           <NewBookForm/>
       </>
    )
}

export default BookList
