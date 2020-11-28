import React, {useContext, useState} from 'react'
import {ThemeContext } from '../contexts/ThemeContext'

const BookList = () => {

    const themeContext = useContext(ThemeContext)
    const {isLightTheme, dark, light} = themeContext
    const theme = isLightTheme ? light : dark

    const [books, setBooks] = useState([
        {name :'The way of kings' , id : 1},
        {name :'Twilight' , id : 2},
        {name :'Harry Potter' , id : 3}
    ])

    return (
        <div className='book-list' style={{background: theme.bg, color: theme.syntax}}>
            <ul>
               {books.map((book)=> {
                   return(<li key={book.id}>{book.name}</li>)
               })}
            </ul>
        </div>
    )
}

export default BookList
