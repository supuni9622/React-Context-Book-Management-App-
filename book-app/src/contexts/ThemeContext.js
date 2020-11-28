import React, {createContext, useCallback, useState} from 'react';

export const ThemeContext = createContext()

const ThemeContextProvider = ({children}) => {

    const [isLightTheme, setIsLightTheme] = useState(true)
    const [light, setLight] = useState({
        syntax : '#000',
        ui : '#ddd',
        bg : '#eee',
        st : '#000'
    })
    const [dark, setDark] = useState({
        syntax : '#ddd',
        ui : '#333',
        bg : '#555',
        st : '#fff'
    })

    const toggleTheme = useCallback(() => {
       setIsLightTheme(!isLightTheme)
    },[setIsLightTheme, isLightTheme])

    return(
        <ThemeContext.Provider value={{isLightTheme,light,dark, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider
