import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Structure } from '../interfaces/Structure';

interface CardProps {
    card: Structure;
}

const ArticleCards: React.FunctionComponent<CardProps> = ({ card }) => {
    return (
        <Card className="text-center mb-3">
            <Card.Header>{card.newsSite}</Card.Header>
            <Card.Body>
                <Card.Title className='mb-3'>{card.title}</Card.Title>
                <img src={card.imageUrl} alt="img" style={{ width: 450, height: 300 }} className='mb-3'/>
                <Card.Text>
                    <a href={card.url}>Visita il sito</a>
                </Card.Text>
                <Button variant="primary">Read Now </Button>
            </Card.Body>
        </Card>
    );
}

export default ArticleCards;