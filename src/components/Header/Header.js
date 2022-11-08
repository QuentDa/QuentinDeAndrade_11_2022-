import React from 'react';
import logo from './../../logo.svg';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
    return (
        <header>
            <div className="Container">
                <div className='Header_wrapper'>
                    <NavLink to="/"><img src={logo} className="Logo"  alt='logo'/></NavLink>
                    <div className='Menu'>
                        <ul>
                            <li><NavLink to="/" end>Accueil</NavLink></li>
                            <li><NavLink to="/About">A Propos</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}