import './Footer.css'
import "./../../../src/index.css"

export function Footer() {
    return <div className='footer v-flex'>

       <div className='social-media-links'>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-x-twitter"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-instagram"></i>
        </div>

        <div className='last-section'>
            <p> &copy; Manish Prasad</p>
        </div>
    </div>
}