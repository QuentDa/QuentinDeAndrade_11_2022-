import React from 'react';
import './Tag.css';

export default function Tag({tags}) {
    console.log({tags})
    return (
        <div>
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
{/* <span className='Tag'>{tag}</span> */}