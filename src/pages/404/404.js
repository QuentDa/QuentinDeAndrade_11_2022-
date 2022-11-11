import React from 'react';
import { NavLink } from 'react-router-dom';
import './404.css';

export default function NotFound() {


    return (
        <div className='Container Not_found' id='NotFound'>
            <h2>404</h2>
            <span>Oups! La page que vous demandez n'existe pas.</span>
            <NavLink to="/">Retourner sur la page d'accueil</NavLink>
        </div>
    );
}