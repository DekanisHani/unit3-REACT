import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ArticleMain from './components/ArticleMain';

function App() {
  return (
    <BrowserRouter>
      <div className="App bg-secondary">
        <Routes>
          <Route path='/' element={<ArticleMain />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
