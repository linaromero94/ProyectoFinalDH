import React from 'react'

import facebookIcon from "../assets/facebook.png"
import gitLabIcon from "../assets/gitlab.png"
import twitterIcon from "../assets/twitter.png"
import linkedinIcon from "../assets/linkedin.png"

const Footer = () => {
    return(
        
    <footer class="footers">
        

        <ul className="icono-social">
        <li className="itemIconoSocial"><a href="#" className="linkIconosocial"><img src={facebookIcon} alt="" className='logo'/></a></li>
            <li className="itemIconoSocial"><a href="#" className="linkIconosocial"><img src={linkedinIcon} alt="" className='logo'/></a></li>
            <li className="itemIconoSocial"><a href="#" className="linkIconosocial"><img src={twitterIcon} alt="" className='logo'/></a></li>
            <li className="itemIconoSocial"><a href="#" className="linkIconosocial"><img src={gitLabIcon} alt="" className='logo'/></a></li> 
            
        </ul>

        <ul className="menu">
        <li className="itemMenu"><a href="#" className="linkmenu">Inicio</a></li>
            <li className="itemMenu"><a href="#" className="linkmenu">Acerca de</a></li>
            <li className="itemMenu"><a href="#" className="linkmenu">Servicios</a></li>
            <li className="itemMenu"><a href="#" className="linkmenu">Grupo</a></li>
            <li className="itemMenu"><a href="#" className="linkmenu">Contacto</a></li>
        </ul>
        <p>©2023 Digital House Equipo 11 C1 | Derechos reservados.</p>

       
        

        

    </footer>
    )
}
export default Footer;