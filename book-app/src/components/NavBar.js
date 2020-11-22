import React, {useContext} from 'react'
import {ThemeContext } from '../contexts/ThemeContext'

const NavBar = () => {
    
    // Access values provided by the ThemeContext provider
    const themeContext = useContext(ThemeContext)

    // Object destructuring
    const {isLightTheme, dark, light} = themeContext

    const theme = isLightTheme ? light : dark
   
    return (
        <nav style={{background: theme.ui, color: theme.syntax}}>
            <h1>Book Management App</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

export default NavBar