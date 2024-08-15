import './card.scss';
import { Link } from 'react-router-dom';

function Card({ title, cover, id }) {
    return (
        <Link to={`/logement/${id}`} className='card' style={{ backgroundImage: `url(${cover})` }}>
            <h3>{title}</h3>
        </Link>
    );
}

export default Card;
