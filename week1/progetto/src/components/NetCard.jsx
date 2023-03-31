import { Card, CardImg } from "react-bootstrap";

//CARDS
const NetCard = (props) =>
    <>

        <Card className="cardImg my-3 mx-2 border border-dark" >
            <CardImg src={props.movie.Poster} alt={props.movie.Title} style={{ height: "250px" }} />
        </Card>
    </>
export default NetCard