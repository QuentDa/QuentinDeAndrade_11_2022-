import React, { useState } from 'react';
import ArrowDown from './../../assets/svg/arrow_down.svg'
import './Collapsible.css';

export default function Collapsible(props) {
    const [open, setOpen] = useState(false)
    function Toggle() {
        setOpen(!open)
    }

    return (
            <div className='Collapsible_container'>
                <div className='Spoiler_title_wrapper' onClick={Toggle}>
                    <span className='Spoiler_title'>{ props.title }</span>
                    <img src={ ArrowDown } alt="flèche bas" />
                </div>
                {open && 
                    <div className='Spoiler'>
                        <p>{ props.description }</p>
                    </div>
                }
            </div>
    );
}