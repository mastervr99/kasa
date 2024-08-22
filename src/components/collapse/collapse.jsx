import './collapse.scss';
import { useState } from 'react';

function Collapse({ title, text }) {
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
            {isOpen && <div className='collapse_content'>
                <p>{text}</p>    
            </div>}
        </div>
    );
}

export default Collapse;
