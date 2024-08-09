import LOGO from '../../assets/images/LOGO.png';
import './header.scss';

function Header() {
    return <div className='header'>
                <div>
                    <a href='#'><img src={LOGO}/></a>
                </div>
                <div className='navbar'>
                    <ul className='navList'>
                        <li>Accueil</li>
                        <li>A Propos</li>
                    </ul>
                </div>
            </div>
}

export default Header