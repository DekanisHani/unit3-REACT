import { Component } from "react";
import SingleBook from "./SingleBook";
import fantasy from '../data/fantasy.json'
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

class BookList extends Component {

    render() {
        
        return (
            <div className="mt-4 container">
            <Row>              
              <InputGroup className="mb-3">
        <Form.Control
          placeholder="CERCA"
          aria-label="CERCA IL LIBRO CHE VUOI LEGGERE"
          aria-describedby="basic-addon2"
          onChange={(e) => {
                    this.setState({
                      reservation: {
                        ...this.state.reservation,
                        phone: e.target.value,
                      },
                    })
                  }}
        />
        <Button variant="outline-secondary" id="button-addon2" type="submit">
          CERCA
        </Button>
      </InputGroup>
                {
                    fantasy.map((book) => {
                        return ( <SingleBook book={book} key = {book.asin} />)
                    })

                }


            </Row>
            </div>
        )
    }


}


export default BookList;