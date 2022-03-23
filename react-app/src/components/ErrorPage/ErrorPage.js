import './ErrorPage.css'
import everwrite404 from '../../assets/everwrite-404.jpg'

export default function ErrorPage() {
    return (
        <div className='err-page-container' >
            <div>
            <img className='error-pic' src={everwrite404} alt='404-pic'></img>
            </div>
        </div>
    )
}
