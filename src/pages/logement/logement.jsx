import './logement.scss';
import { useParams } from 'react-router-dom';
import logements from '../../assets/data/logements.json';

function Logement() {
    const { id } = useParams();
    const logement = logements.find(logement => logement.id === id);

    if (!logement) {
        return <div>Logement non trouvé</div>;
    }

    return (
        <div className='logement'>
            <h1>{logement.title}</h1>
            <img src={logement.cover} alt={logement.title} />
            <p>{logement.description}</p>
        </div>
    );
}

export default Logement;
