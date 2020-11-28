import React, {useState, useCallback, useContext} from 'react';
import {BookContext} from '../contexts/BookContext';

const NewBookForm = () => {

    const {addBook} = useContext(BookContext)

    const [bookValue, setBookValue] = useState('')
    const [author, setAuthor] = useState('')

    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault();
            addBook(bookValue, author);
            setBookValue('');
            setAuthor('');
        },
        [bookValue,addBook,setBookValue,author]
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