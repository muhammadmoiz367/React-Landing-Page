import React from 'react'
import Logo from '../images/Logo.svg'

function Navbar() {
    return (
        <div id="navbar">
            <img src={Logo} />
            <ul >
                <li>About</li>
                <li>Blog</li>
                <li>Podcast</li>
                <li>Shop</li>
                <li>Newsletter</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default Navbar
