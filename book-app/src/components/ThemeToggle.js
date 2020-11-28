import React, {useContext} from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

const ThemeToggle = () => {

    const {isLightTheme,toggleTheme} = useContext(ThemeContext)

    return (
       <button onClick={toggleTheme} style={{borderRadius:'10px', padding:'5px 20px 5px 20px', marginTop:'20px'}}>{isLightTheme ? 'Dark Mode' : 'Light Mode'}</button>
    )
}

export default ThemeToggle
