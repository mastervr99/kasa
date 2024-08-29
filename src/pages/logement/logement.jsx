import './logement.scss';
import { useParams } from 'react-router-dom';
import logements from '../../assets/data/logements.json';
import Carrousel from '../../components/carrousel/carrousel';
import Host from '../../components/host/host';
import Tag from '../../components/tag/tag';
import Rating from '../../components/rating/rating';
import Collapse from '../../components/collapse/collapse';
import Error_Page from '../error_page/error_page';

function Logement() {
    const { id } = useParams();
    const logement = logements.find(logement => logement.id === id);

    if (!logement) {
        return <Error_Page/>;
    }

    return (
        <div className='logement'>
            <Carrousel pictures={logement.pictures}/>
            <div className='logement_infos'>
                <div className='logement_title_location'>
                    <div className='logement_details'>
                        <h1>{logement.title}</h1>
                        <p>{logement.location}</p>
                    </div>
                    <div className='tags_list'>
                        {logement.tags.map((tag) => (
                                <Tag key={tag} tag={tag} />
                            ))}
                    </div>
                </div>
                <div className='logement_host_notation'>
                    <Host host={logement.host} />
                    <Rating rating={logement.rating}/>
                </div>
            </div>
            <div>
                <ul className='collapse_list'>
                    <li><Collapse title="Description"><p>{logement.description}</p></Collapse></li>
                    <li>
                        <Collapse title="Equipements">
                            <div>
                                <ul>
                                {logement.equipments.map((equipment, index) => (
                                    <li key={index}>{equipment}</li>
                                ))}
                                </ul>
                            </div>
                        </Collapse>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Logement;
