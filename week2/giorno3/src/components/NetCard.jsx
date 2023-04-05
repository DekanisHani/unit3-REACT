import { Card, CardImg } from "react-bootstrap";
import { Link } from "react-router-dom";

//CARDS
const NetCard = (props) => {
    return (<Card className="cardImg my-3 mx-2 border border-dark d-flex align-items-center" bg='dark' >
            <CardImg src={props.movie.Poster} alt={props.movie.Title} style={{ height: "250px" }} />
            <Link className="btn btn-secondary text-light m-2 w-50  " to={'/details/' + props.movie.imdbID}>
                Details
                </Link>
        </Card>)
}
        
    
export default NetCard