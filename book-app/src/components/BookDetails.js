import React, {useContext} from 'react';
import {BookContext} from '../contexts/BookContext';
import {ThemeContext} from '../contexts/ThemeContext'

const BookDetails = ({book}) => {

    const { removeBook} = useContext(BookContext);
    const {isLightTheme, dark, light} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    return (
        <li onClick={() => removeBook(book.id)} style={{background: theme.ui}}>
            <div className='title'>{book.name}</div>
            <div className='author'>{book.author}</div>
        </li>
    )
}

export default BookDetails