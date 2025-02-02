import react from 'react'
import Base from './Base'

export default function Footer() {
    return (
        <>
        <div className="footer">
            <div className='footer-sec1'>
            <div><a href="mailto:damininayak.ryp@gmail.com" target='_blank'><img src={Base.email} alt="email" /></a></div>
            <div><a href="tel:+917049377452" target='_blank'><img src={Base.phone} alt="phone" /></a></div>
            <div><a href="https://www.instagram.com/_dip_ti/#" target='_blank'><img src={Base.instagram} alt="instagram" /></a></div>
            <div><a href="https://www.linkedin.com/in/damini-nayak" target='_blank'><img src={Base.linkedin} alt="linkedin" /></a></div>
            <div><a href="https://github.com/Damini-nayak" target='_blank'><img src={Base.github} alt="github" /></a></div>
            </div>
            <div className='footer-sec2'><p>Created By <a href="https://www.devmini.in/" target='_blank'>devmini.in</a></p></div>
        </div>
        </>
    );
}