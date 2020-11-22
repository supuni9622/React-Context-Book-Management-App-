import NavBar from './components/NavBar'
import BookList from './components/BookList'
import ThemeContextProvider from './contexts/ThemeContext';

const App = () => {
  return (
    <div className="App">
      {/* Pass NavBar and BookList as children properties of ThemeContext Provider*/}
      <ThemeContextProvider>
        <NavBar/>
        <BookList/>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
