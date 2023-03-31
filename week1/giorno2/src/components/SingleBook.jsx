import { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


class SingleBook extends Component {


    render() {
        const { book } = this.props;
        console.log(book)
        return (
           
                <Col xs={12} md={6} lg={3}>
                    <Card className='mb-5' style={{ width: '18rem' }} key={book.asin}>
                        <Card.Img variant="top" src={book.img} style={{ height: '60%' }} />
                        <Card.Body>
                            <Card.Title>{book.title}</Card.Title>
                            <Card.Text>
                                {book.category}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            
        )
    }
}





export default SingleBook