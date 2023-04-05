import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'react-bootstrap-icons'
import * as Icon from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

function NetNavbar() {

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home"><img src="../assets/netflix_logo.png" alt="logo" width={100} /></Navbar.Brand>
        <Nav className="me-auto ">
          <Nav.Link><Link to='/' className={'text-decoration-none text-light opacity-50'}>Home</Link></Nav.Link>
          <Nav.Link><Link to="/shows" className='text-decoration-none text-light opacity-50'>Tv Shows</Link></Nav.Link>
          <Nav.Link href="#" className='text-light opacity-50'>Movies</Nav.Link>
          <Nav.Link href="#" className='text-light opacity-50'>Recently Added</Nav.Link>
          <Nav.Link href="#" className='text-light opacity-50'>My List</Nav.Link>
        </Nav>
        <Nav className='align-items-center'>
          <Nav.Link href='#'><Icon.Search /></Nav.Link>
          <Nav.Link href='#'>KIDS</Nav.Link>
          <Nav.Link href='#'><Icon.BellFill /></Nav.Link>
          <Nav.Link href='#'><img src="../assets/avatar.png" alt="avatar" width={40} /></Nav.Link>
          <Nav.Link href='#'><Icon.CaretDownFill /></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NetNavbar;