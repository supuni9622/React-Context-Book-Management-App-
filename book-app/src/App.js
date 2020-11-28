import NavBar from './components/NavBar'
import BookList from './components/BookList'
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle'

const App = () => {
  return (
    <div className="App">
      {/* Pass NavBar and BookList as children properties of ThemeContext Provider*/}
      <ThemeContextProvider>
        <NavBar/>
        <BookList/>
        <ThemeToggle/>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
