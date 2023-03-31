import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-icons'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NetNavbar from './components/NetNavbar';
import NetCarousel1 from './components/NetCarousel1';
import Net2Nav from './components/Net2Nav';
import NetFooter from './components/NetFooter';

function App() {
  return (
    <div className="App text-bg-dark">
      <NetNavbar />
      <Net2Nav />
      <h2>Best Sellers</h2>
      <NetCarousel1 films='Naruto' />
      <h2>Trending Now</h2>
      <NetCarousel1 films='Dragon%20Ball' />
      <h2>Watch It Again</h2>
      <NetCarousel1 films='Marvel' />
      <h2>New Releases</h2>
      <NetCarousel1 films='Fast' />

      <NetFooter />
    </div>
  );
}

export default App
