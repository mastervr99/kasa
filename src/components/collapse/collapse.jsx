import './collapse.scss'

function Collapse({text}) {
    return <div className='collapse'>
                <p>{text}</p>
                <span class="arrow"><i class="fa-solid fa-angle-up"></i></span>
           </div>
}

export default Collapse