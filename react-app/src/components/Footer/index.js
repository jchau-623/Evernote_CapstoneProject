import './Footer.css'
import github from '../../assets/github.png'

export default function Footer() {



    return (
        <div id='footer'>
            <ul id='tech-stack'>
                <li className='list-item'>JavaScript</li>
                <li className='list-item'>Python</li>
                <li className='list-item'>React</li>
                <li className='list-item'>Flask</li>
                <li className='list-item'>SQLAlchemy</li>
                <li className='list-item'>Redux</li>
                <li className='list-item'>Git</li>
                <li className='list-item'>Docker</li>
                <li className='list-item'>Postgres</li>
                <li className='list-item'>AWS</li>
            </ul>
            <p id='trademark'>© 2022 Everwrite by Justin Chau
             <a id='link' href="https://github.com/jchau-623">
                        <img id='link' src={github}></img></a></p>
         </div>
    )
}
