import './error_page.scss';

function Error_Page() {
    return <div>
                <main className='error_page'>
                    <h2>404</h2>
                    <p>Oups! La page que vous demander n'existe pas</p>
                    <a><p>Retourner sur la page d'accueil</p></a>
                </main>
           </div>
}

export default Error_Page