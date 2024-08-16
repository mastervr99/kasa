
import Banner from '../../components/banner/banner';
import './about.scss';
import backgroundImage from '../../assets/images/background_about.png';
import Collapse from '../../components/collapse/collapse';


function About() {
    return <div className='about'>
               <Banner backgroundImage={backgroundImage} />
                <main className='collapses'>
                    <ul className='collapse_list'>
                        <li><Collapse text="Fiabilité"/></li>
                        <li><Collapse text="Respect"/></li>
                        <li><Collapse text="Service"/></li>
                        <li><Collapse text="Sécurité"/></li>
                    </ul>
                </main>
           </div>
}

export default About