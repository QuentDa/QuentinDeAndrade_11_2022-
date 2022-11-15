import React from 'react';
import { NavLink } from 'react-router-dom';
import './Card.css';

export default function Card({Link, Picture, Alt, Title}) {
    return (
        <NavLink to={Link}>
            <div className='Card'>
                <img src={Picture} alt={Alt} />
                <span>
                    {Title}
                </span>
            </div>
        </NavLink>
    );
}