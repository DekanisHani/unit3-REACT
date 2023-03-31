import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import 'react-bootstrap-icons'
import * as Icon from 'react-bootstrap-icons';

//H1 - DROPDOWN - ICONE
function Net2Nav() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home"> <h1>TV Shows</h1></Navbar.Brand>
        <Nav className="me-auto">

          <Dropdown>
            <Dropdown.Toggle variant="dark" id="dropdown-basic">
              GENRES
            </Dropdown.Toggle>

            <Dropdown.Menu className='bg-dark'>
              <Dropdown.Item href="#/action-1" className='text-light'>Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2" className='text-light'>True Stories</Dropdown.Item>
              <Dropdown.Item href="#/action-3" className='text-light'>Comedy</Dropdown.Item>
              <Dropdown.Item href="#/action-3" className='text-light'>Thriller</Dropdown.Item>
              <Dropdown.Item href="#/action-3" className='text-light'>Horror</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

        </Nav>
        <Nav className='align-items-center'>
          <Nav.Link href='#'><Icon.TextLeft /></Nav.Link>
          <Nav.Link href='#'><Icon.GridFill /></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Net2Nav;