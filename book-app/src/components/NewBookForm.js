import React, {useState, useCallback} from 'react'

const NewBookForm = ({addBook}) => {

    const [bookValue, setBookValue] = useState('')

    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault();
            addBook(bookValue);
            setBookValue('');
        },
        [bookValue,addBook,setBookValue]
    );

    return ( 
        <form onSubmit={handleSubmit}>
            <label>Book Name</label>
            <input type='text' value={bookValue} required onChange={(e) => setBookValue(e.target.value)}/>
            <input type='submit' value='Add A Book'/>
        </form>
     );
}
 
export default NewBookForm;