import React, { useState } from 'react';
import './Collapsible.css';

export default function Collapsible() {
    const [open, setOpen] = useState(false)
    function Toggle() {
        setOpen(!open)
    }

    return (
        <div className="Container">
            <span className='Spoiler_title' onClick={Toggle}>Équipements</span>
            {open && 
                <ul className='Spoiler'>
                    <li>Climatisation</li>
                    <li>Wi-Fi</li>
                    <li>Cuisine</li>
                    <li>Espace de travail</li>
                    <li>Fer à repasser</li>
                    <li>Sèche-cheveux</li>
                    <li>Cintres</li>
                </ul>
            }
        </div>
    );
}