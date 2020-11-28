import NavBar from './components/NavBar';
import BookList from './components/BookList';
import ThemeContextProvider from './contexts/ThemeContext';
import AuthContextProvider from './contexts/AuthContext';
import BookContextProvider from './contexts/BookContext';
import ThemeToggle from './components/ThemeToggle';

const App = () => {
  return (
    <div className="App">
      {/* Pass NavBar and BookList as children properties of ThemeContext Provider*/}
     <AuthContextProvider>
      <ThemeContextProvider>
        <NavBar/>
        <BookContextProvider>
          <BookList/>
        </BookContextProvider>
        <ThemeToggle/>
      </ThemeContextProvider>
     </AuthContextProvider>
    </div>
  );
}

export default App;
