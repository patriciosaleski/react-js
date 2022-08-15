import React from 'react'
import { NavLink } from 'react-router-dom'

import logo from './logo.png'
import CartWidget from '../CartWidget/CartWidget'

import './navbar.css'


const NavBar = () => {
    return (
        <header className='container'>
            <nav className='navbar'>
                <NavLink to='/' ><img className='navbar__logo' src={logo} alt='Logo compuesto por 3 carpas indias de fondo y el texto Uñika por delante'/></NavLink>
                <ul className='navbar__menu'>
                    <li className='navbar__menu--item'><NavLink to='/' >Tienda</NavLink></li>
                    <li className='navbar__menu--item'><NavLink to='/' >Contacto</NavLink></li>
                    <li className='navbar__menu--item'><NavLink to='/' >Nosotros</NavLink></li>
                    <li className='navbar__menu--item'><CartWidget /></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar