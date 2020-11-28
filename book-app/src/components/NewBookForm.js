import React, {useState, useCallback, useContext} from 'react';
import {BookContext} from '../contexts/BookContext';

const NewBookForm = () => {

    // const {addBook} = useContext(BookContext)
    // Replace with dispatch from reducers
    const {dispatch} = useContext(BookContext);

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
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Book Title' value={bookValue} required onChange={(e) => setBookValue(e.target.value)}/>
            <input type='text' placeholder='Author' value={author} required onChange={(e) => setAuthor(e.target.value)}/>
            <input type='submit' value='Add Book'/>
        </form>
     );
}
 
export default NewBookForm;