import './Footer.css'
import github from '../../assets/github.png'

export default function Footer() {



    return (
        <div id='footer'>
            <ul id='tech-stack'>
                <li key='javascript' className='list-item'>JavaScript</li>
                <li key='python' className='list-item'>Python</li>
                <li key='react' className='list-item'>React</li>
                <li key='flask' className='list-item'>Flask</li>
                <li key='sqlalchemy' className='list-item'>SQLAlchemy</li>
                <li key='redux' className='list-item'>Redux</li>
                <li key='git' className='list-item'>Git</li>
                <li key='docker' className='list-item'>Docker</li>
                <li key='postgres' className='list-item'>Postgres</li>
                <li key='aws' className='list-item'>AWS</li>
            </ul>
            <p id='trademark'>© 2022 Everwrite by Justin Chau
             <a id='link' href="https://github.com/jchau-623">
                        <img id='link' src={github}></img></a></p>
         </div>
    )
}
