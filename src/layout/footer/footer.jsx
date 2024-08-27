import './footer.scss';
import LOGO_footer from '../../assets/images/LOGO_footer.png';
import { useLocation } from 'react-router-dom';

function Footer() {

    const location = useLocation();

    const isAboutPage = location.pathname === '/about';

    return (
        <footer className={`footer ${isAboutPage ? 'footer-absolute' : ''}`}>
            <div>
                <img src={LOGO_footer} alt="Logo Kasa" />
            </div>
            <div className='copyright'>
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    );
}

export default Footer