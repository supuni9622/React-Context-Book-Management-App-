import React, {useState, createContext} from 'react'

export const BookContext = createContext()

const BookContextProvider = ({children}) => {

    const [books, setBooks] = useState([
        {name :'The way of kings' , id : 1},
        {name :'Twilight' , id : 2},
        {name :'Harry Potter' , id : 3}
    ])

    return (
       <BookContext.Provider value={{books, setBooks}}>
           {children}
       </BookContext.Provider>
    )
}

export default BookContextProvider
