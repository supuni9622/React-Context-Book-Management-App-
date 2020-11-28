import React, {useContext} from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

const ThemeToggle = () => {

    const themeContext = useContext(ThemeContext)
    const {toggleTheme} = themeContext

    return (
       <button onClick={toggleTheme}>Toggle the theme</button>
    )
}

export default ThemeToggle
