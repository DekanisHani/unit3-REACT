import { useState, useEffect } from "react";
import { Structure } from "../interfaces/Structure";
import ArticleCards from "./ArticleCards";
import { Row, Col } from "react-bootstrap";

const ArticleMain: React.FunctionComponent = () => {
    const [SpaceArticles, setSpaceArticles] = useState<Structure[]>([]);


    const fetchSpaceArticles = async () => {
        try {
            let response = await fetch("https://api.spaceflightnewsapi.net/v3/articles");
            if (response.ok) {
                let data = await response.json();
                console.log(data)
                setSpaceArticles(data)
            } else {
                console.log("ERRORE")
            }
        } catch (error) {
            alert("ERRORE NELLA FETCH")
        }
    }

    useEffect(() => {
        fetchSpaceArticles()
    }, [])
    return (
        <div>
            <Row className="justify-content-center">
                <Col className=" col-6 align-items-center">
                    {SpaceArticles.map(card => (
                        <ArticleCards key={card.id} card={card} />
                    ))}
                </Col>
            </Row>

        </div>
    )

}

export default ArticleMain;