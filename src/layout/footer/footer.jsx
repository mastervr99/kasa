import './footer.scss';
import LOGO_footer from '../../assets/images/LOGO_footer.png';

function Footer() {
    return <footer className='footer'>
                <div>
                    <img src={LOGO_footer}/>
                </div>
                <div className='copyright'>
                    <p>© 2020 Kasa. All rights reserved</p>
                </div>
            </footer>
}

export default Footer