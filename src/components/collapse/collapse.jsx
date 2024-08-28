import './collapse.scss';
import { useState } from 'react';

function Collapse({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='collapse'>
            <div className='collapse_title'>
                <h2>{title}</h2>
                <span className={`arrow ${isOpen ? 'open' : ''}`} onClick={toggleCollapse}>
                    <i className="fa-solid fa-angle-up"></i>
                </span>
            </div>
            <div className={`collapse_content ${isOpen ? 'open' : ''}`}>
                {children}    
            </div>
        </div>
    );
}

export default Collapse;
