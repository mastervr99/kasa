import './footer.scss';
import LOGO_footer from '../../assets/images/LOGO_footer.png';

function Footer() {
    return <div className='footer'>
                <div>
                    <a href='#'><img src={LOGO_footer}/></a>
                </div>
                <div>
                    <p>© 2020 Kasa. All rights reserved</p>
                </div>
            </div>
}

export default Footer