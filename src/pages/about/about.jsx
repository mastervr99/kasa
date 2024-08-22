
import Banner from '../../components/banner/banner';
import './about.scss';
import backgroundImage from '../../assets/images/background_about.png';
import Collapse from '../../components/collapse/collapse';


function About() {

    const fiabily_text = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont confirmes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.";

    const respect_text = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exlusion de notre plateforme.";

    const service_text = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exlusion de notre plateforme.";
    
    const security_text = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une notre aussi bieen à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes";

    return <div className='about'>
               <Banner backgroundImage={backgroundImage} />
                <main className='collapses'>
                    <ul className='collapse_list'>
                        <li><Collapse title="Fiabilité" text={ fiabily_text}/></li>
                        <li><Collapse title="Respect" text={respect_text}/></li>
                        <li><Collapse title="Service" text={service_text}/></li>
                        <li><Collapse title="Sécurité" text={security_text}/></li>
                    </ul>
                </main>
           </div>
}

export default About