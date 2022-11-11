import React, { useState} from 'react';
import Star from './../../assets/svg/star.svg'
import './Rating.css';

export default function Rating({ rating }) {
    const blankStars = 5 - rating;
    console.log(blankStars);

    let li = [];
    for (let i = 0; i < rating; i++) {
        li.push(<li key={i}>ETOILE PLEINE</li>)
    }
    for (let j = 0; j < blankStars; j++) {
        li.push(<li key={j}>ETOILE VIDE</li>)
    }
    
    return (
        <div>
            <ul>
                {li}
            </ul>
        </div>
    );
}