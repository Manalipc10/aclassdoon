import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import './Footer.css'

const Footer = () => {
    return (
        <div class='footer'>
            Developed with <FontAwesomeIcon icon={faHeart} color='red'/> by <a href='https://webminix.co/' target="_blank" rel="noreferrer" className="f-link">WEBMINIX</a>
        </div>
    )
}

export default Footer