import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav';
import Welcome from './components/Welcome'
// import AllTheBooks from './components/AllTheBooks';
import MyFooter from './components/MyFooter';
import BookList from './components/BookList';

function App() {
  return (
    <div className="App">
      <header>
        <MyNav />
      </header>
      <main>
        <Welcome />
        <BookList />
      {/* <AllTheBooks /> */}
      </main>
      <footer>
        <MyFooter />
      </footer>
      
    </div>
  );
}

export default App;
