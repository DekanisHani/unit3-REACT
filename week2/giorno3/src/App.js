import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-icons'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NetNavbar from './components/NetNavbar';
import NetCarousel1 from './components/NetCarousel1';
import Net2Nav from './components/Net2Nav';
import NetFooter from './components/NetFooter';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NetTvShows from './components/NetTvShows';
import NetDetails from './components/NetDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="App text-bg-dark">
        <NetNavbar />
        <Net2Nav />
       
        <Routes>
          <Route path='/' element={<NetTvShows />} />
          <Route path='/shows' element={<NetCarousel1 films='spy' />} />
          <Route path='/details/:id' element={<NetDetails />} />
        </Routes>
        
        <NetFooter />
      </div>
    </BrowserRouter>
  );
}

export default App
