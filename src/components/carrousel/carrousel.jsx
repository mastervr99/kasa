import './carrousel.scss';
import { useState } from 'react';


function Carrousel({pictures}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className='carrousel'>
            {pictures.length > 1 && (
                <button onClick={handlePrev} className='prev'><i class="fa-sharp fa-solid fa-chevron-left"></i></button>
            )}
            <img src={pictures[currentIndex]} alt={`Image ${currentIndex + 1}`} className='carrousel-image' />
            {pictures.length > 1 && (
                <button onClick={handleNext} className='next'><i class="fa-sharp fa-solid fa-chevron-right"></i></button>
            )}

            {pictures.length > 1 && (
                <div className='counter'>
                    {currentIndex + 1}/{pictures.length}
                </div>
            )}
        </div>
    );
}

export default Carrousel;
