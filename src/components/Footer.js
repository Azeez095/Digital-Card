import React from "react"
import './component.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter, faFontAwesome,faSquareFacebook,faSquareInstagram, faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Footer () {
    return (
        <footer>
            <a href = ""><FontAwesomeIcon icon={faXTwitter} className= "icon" /></a>
            <a href = "https://m.facebook.com/profile.php?id=100014437712657&name=xhp_nt__fb__action__open_user" target="_blank"><FontAwesomeIcon icon={faSquareFacebook} className= "icon" /></a>
            <FontAwesomeIcon icon={faSquareInstagram}className= "icon" />
            <a href = "https://www.linkedin.com/in/akolade-amoo-9635b6143/" target="_blank"><FontAwesomeIcon icon={faLinkedin} className= "icon"/></a>
            <a href = "https://github.com/Azeez095?" target="_blank"><FontAwesomeIcon icon={faGithub} className= "icon"/></a>
        </footer>
    )
}
