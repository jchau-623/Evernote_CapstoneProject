import './Footer.css'
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.jpg'

export default function Footer() {



    return (
        <div id='footer'>
            <ul id='tech-stack'>
                <li key='javascript' className='list-item'>JavaScript</li>
                <li key='git' className='list-item'>Git</li>
                <li key='postgres' className='list-item'>Postgres</li>
                <li key='react' className='list-item'>React</li>
                <li key='redux' className='list-item'>Redux</li>
                <li key='python' className='list-item'>Python</li>
                <li key='flask' className='list-item'>Flask</li>
                <li key='sqlalchemy' className='list-item'>SQLAlchemy</li>
                <li key='docker' className='list-item'>Docker</li>
            </ul>
            <p id='trademark'>© 2022 Everwrite by Justin Chau
             <a id='link' target='_blank' rel="noopener noreferrer" href="https://github.com/jchau-623">
                        <img id='link' target='_blank' rel="noopener noreferrer" src={github}></img>
                        </a>
            <a id='link' target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/justin-chau-1123a9142/">
            <img id='link' target='_blank' rel="noopener noreferrer" src={linkedin}></img>
            </a>
            </p>

         </div>
    )
}
