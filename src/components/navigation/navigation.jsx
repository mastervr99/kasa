import './navigation.scss';
import { NavLink } from 'react-router-dom';

function Navigation() {
    return <div className='navbar'>
                <ul className='navList'>
                    <NavLink to="/" end className={({ isActive }) => (isActive ? "nav-active" : "")}>
                        <li>ACCUEIL</li>
                    </NavLink>
                    <NavLink to="/about" end className={({ isActive }) => (isActive ? "nav-active" : "")}>
                        <li>A PROPOS</li>
                    </NavLink>
                </ul>
            </div>
}

export default Navigation