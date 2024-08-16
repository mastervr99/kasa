import './banner.scss';

function Banner({ backgroundImage, text }) {
    return (
        <div className='banner' style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className='overlay'></div>
            <p>{text}</p>
        </div>
    );
}

export default Banner