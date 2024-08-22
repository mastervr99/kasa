import './logement.scss';
import { useParams } from 'react-router-dom';
import logements from '../../assets/data/logements.json';
import Carrousel from '../../components/carrousel/carrousel';
import Host from '../../components/host/host';
import Tag from '../../components/tag/tag';
import Rating from '../../components/rating/rating';
import Collapse from '../../components/collapse/collapse';

function Logement() {
    const { id } = useParams();
    const logement = logements.find(logement => logement.id === id);

    if (!logement) {
        return <div>Logement non trouvé</div>;
    }

    return (
        <div className='logement'>
            <Carrousel pictures={logement.pictures}/>
            <div className='logement_infos'>
                <div className='logement_details'>
                    <h1>{logement.title}</h1>
                    <p>{logement.location}</p>
                </div>
                <Host host={logement.host} />
            </div>
            <div className='logement_tags_notation'>
                <div className='tags_list'>
                    {logement.tags.map((tag) => (
                            <Tag tag={tag} />
                        ))}
                </div>
                <Rating rating={logement.rating}/>
            </div>
            <div>
                <ul className='collapse_list'>
                    <li><Collapse title="Description" text={logement.description}/></li>
                    <li><Collapse title="Equipements" text={logement.equipments}/></li>
                </ul>
            </div>
        </div>
    );
}

export default Logement;
