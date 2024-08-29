import './rating.scss';

function Rating({ rating }) {
    const totalStars = 5;
    const stars = [];

    for (let i = 0; i < totalStars; i++) {
        if (i < rating) {
            stars.push(<span key={i} className='red_star'><i className="fa-solid fa-star"></i></span>);
        } else {
            stars.push(<span key={i} className='grey_star'><i className="fa-solid fa-star"></i></span>);
        }
    }

    return (
        <div className='rating'>
            {stars}
        </div>
    );
}

export default Rating;
