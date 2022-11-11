import React from 'react';
import Star from '../Star/Star';
import './Rating.css';

export default function Rating({ rating }) {
    const blankStars = 5 - rating;
    console.log(blankStars);

    let li = [];
    for (let i = 0; i < rating; i++) {
        li.push(<li key={i}><Star color="#FF6060" /></li>)
    }
    for (let j = 0; j < blankStars; j++) {
        li.push(<li key={j}><Star color="#E3E3E3" /></li>)
    }
    
    return (
        <div className='Rating-stars'>
            <ul className='Rating-stars-list'>
                {li}
            </ul>
        </div>
    );
}