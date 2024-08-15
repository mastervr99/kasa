
import './home.scss';
import Banner from '../../components/banner/banner'
import Card from '../../components/card/card';
import backgroundImage from '../../assets/images/background_introduction.png';
import logements from '../../assets/data/logements.json';

function Home() {
    return <div className='home'>
               <Banner backgroundImage={backgroundImage} text="Chez vous, partout et ailleurs" />
               <main className='locations-list'>
               {logements.map((logement) => (
                    <Card key={logement.id} id={logement.id} title={logement.title} cover={logement.cover} />
                ))}
               </main>
           </div>
}

export default Home