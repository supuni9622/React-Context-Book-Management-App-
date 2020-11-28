import React, {useContext} from 'react'
import {ThemeContext } from '../contexts/ThemeContext'
import {AuthContext} from '../contexts/AuthContext'

const NavBar = () => {
    
    // Access values provided by the ThemeContext provider
    const themeContext = useContext(ThemeContext)
    const authContext = useContext(AuthContext)

    // Object destructuring
    const {isLightTheme, dark, light} = themeContext
    const {isAuth, toggleAuth} = authContext

    const theme = isLightTheme ? light : dark
   
    return (
        <nav style={{background: theme.ui, color: theme.syntax}}>
            <h1>Book Management App</h1>
            <div onClick={toggleAuth}>
                {isAuth ? 'Logged In' : 'Logged Out'}
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

export default NavBar