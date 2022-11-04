import React from 'react';
import logo from './../../logo.svg';
import './Footer.css';

export default function Footer() {
    return (
        <footer>
            <div className='Container Footer_wrapper'>
                <img src={logo} className="Logo"  alt='logo'/>
                <span>© 2020 Kasa. All rights reserved</span>
            </div>
        </footer>
    );
}