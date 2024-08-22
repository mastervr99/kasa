import './host.scss'

function Host({host}) {

    return (
        <div className='host'>
           <p>{host.name}</p>
           <img src={host.picture} alt="" />
        </div>
    );
}

export default Host;