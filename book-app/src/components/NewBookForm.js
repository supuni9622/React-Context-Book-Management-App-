import React, {useState, useCallback, useContext} from 'react';
import {BookContext} from '../contexts/BookContext';
import {ThemeContext} from '../contexts/ThemeContext'

const NewBookForm = () => {

    // const {addBook} = useContext(BookContext)
    // Replace with dispatch from reducers
    const {dispatch} = useContext(BookContext);
    const {isLightTheme, dark, light} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    const [bookValue, setBookValue] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault();
            //addBook(bookValue, author);
            dispatch({type:'ADD_BOOK', 
                        book : {
                            bookValue, author
                        }});
            setBookValue('');
            setAuthor('');
        },
        [setBookValue,setAuthor,bookValue,author,dispatch]
    );

    return ( 
        <form onSubmit={handleSubmit} style={{background: theme.bg, color: theme.syntax}}>
            <input type='text' placeholder='Book Title' style={{background: theme.ui}} value={bookValue} required onChange={(e) => setBookValue(e.target.value)}/>
            <input type='text' placeholder='Author' style={{background: theme.ui}} value={author} required onChange={(e) => setAuthor(e.target.value)}/>
            <input type='submit' value='Add Book' style={{background: theme.ui, color: theme.st}}/>
        </form>
     );
}
 
export default NewBookForm;