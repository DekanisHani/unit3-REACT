import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function WeatherNavbar(props) {
    const [city, setCity] = useState('');

  
const handleSubmit = (event) => {
    event.preventDefault();
    props.onSearchSubmit(city);
  }

  return (
    <Navbar bg="light" expand="lg" className='navbar'>
      <Container >
        <Navbar.Brand href="#home" className='pb-0'><img src="https://purepng.com/public/uploads/large/weather-forecast-symbol-v7o.png" alt="logo" width={40} className='mx-2'/>
        WEATHER CHANNEL</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#link">Esplora</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Form onSubmit={handleSubmit} className='d-flex'>
        <Form.Control
          placeholder="Cerca la città"
          onChange={(e) => setCity(e.target.value)}
        />
        <Button variant="outline-secondary" className='text-bg-warning' type="submit" id="button-addon2" >
          Cerca
        </Button>
      </Form>
      </Container>
    </Navbar>
  );
}

export default WeatherNavbar;



