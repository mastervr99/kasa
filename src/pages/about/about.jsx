
import Banner from '../../components/banner/banner';
import './about.scss';
import backgroundImage from '../../assets/images/background_about.png';


function About() {
    return <div className='about'>
               <Banner backgroundImage={backgroundImage} />
                <main>
                    <div>
                        <ul>
                            <li>Fiabilité</li>
                            <li>Respect</li>
                            <li>Service</li>
                            <li>Sécurité</li>
                        </ul>
                    </div>
                </main>
           </div>
}

export default About