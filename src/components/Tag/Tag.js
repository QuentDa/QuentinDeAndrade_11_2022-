import React from 'react';
import './Tag.css';

export default function Tag({tags}) {
    return (
        <div className='Tag_wrapper'>
            {
                tags.map(tag => {
                    return(
                        <span className='Tag' key={tag}>{tag}</span>
                    );
                })
            }
        </div>
    );
}