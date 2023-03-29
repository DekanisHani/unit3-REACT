import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Dropdown } from 'react-bootstrap';

import fantasyBooks from '../data/fantasy.json'
import historyBooks from '../data/history.json'
import horrorBooks from '../data/horror.json'
import romanceBooks from '../data/romance.json'
import scifiBooks from '../data/scifi.json'

const arrayGenres = [fantasyBooks, historyBooks, horrorBooks, romanceBooks, scifiBooks];

class AllTheBooks extends Component {

    render() {
        return (
            <Container className='mt-4'>
                <div className="p-5">
            <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    Scegli il genere
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Fantasy</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">History</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Horror</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Romance</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Scifi</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            </div>
                <Row>
                    <Col className="d-flex flex-wrap justify-content-between">
                        {arrayGenres[4].map((book) => {
                            return (
                                <Card className='mb-5' style={{ width: '18rem' }} key={book.asin}>
                                    <Card.Img variant="top" src={book.img} style={{ height: '60%' }} />
                                     <Card.Body>
                                        <Card.Title>{book.title}</Card.Title>
                                        <Card.Text>
                                            {book.category}
                                        </Card.Text>
                                        <Card.Text>
                                            {book.price}€
                                        </Card.Text>
                                        <Button variant="primary">Compra Ora</Button>
                                    </Card.Body>
                                </Card>
                            )
                        })}

                    </Col>
                </Row>
            </Container>
        )
    };
}

export default AllTheBooks;