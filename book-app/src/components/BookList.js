import React, {useContext} from 'react'
import {ThemeContext } from '../contexts/ThemeContext'

const BookList = () => {

    const themeContext = useContext(ThemeContext)
    const {isLightTheme, dark, light} = themeContext
    const theme = isLightTheme ? light : dark

    return (
        <div className='book-list' style={{background: theme.bg, color: theme.syntax}}>
            <ul>
                <li style={{background:theme.ui}}>The way of kings</li>
                <li style={{background:theme.ui}}>Twilight</li>
                <li style={{background:theme.ui}}>Harry Potter</li>
            </ul>
        </div>
    )
}

export default BookList
