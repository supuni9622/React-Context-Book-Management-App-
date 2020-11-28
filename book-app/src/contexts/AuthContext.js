import React, {createContext,useState,useCallback} from 'react'

export const AuthContext = createContext()

const AuthContextProvider = ({children}) => {

    const [isAuth, setIsAuth] = useState(false)

    const toggleAuth = useCallback(
        () => {
           setIsAuth(!isAuth)
        },
        [setIsAuth,isAuth],
    )
    return (
        <div>
            <AuthContext.Provider value={{isAuth, toggleAuth}}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthContextProvider
