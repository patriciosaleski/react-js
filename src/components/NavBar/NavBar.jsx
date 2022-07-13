import React from 'react'
import logo from './logo.png'
import './navbar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <header className='container'>
            <nav className='navbar'>
                <img className='navbar__logo' src={logo} alt='Logo compuesto por 3 carpas indias de fondo y el texto Uñika por delante'/>
                <ul className='navbar__menu'>
                    <li className='navbar__menu--item'><a href="#">Tienda</a></li>
                    <li className='navbar__menu--item'><a href="#">Contacto</a></li>
                    <li className='navbar__menu--item'><a href="#">Nosotros</a></li>
                    <li className='navbar__menu--item'><CartWidget /></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar