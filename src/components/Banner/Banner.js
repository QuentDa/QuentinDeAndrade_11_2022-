import React from 'react';
import './Banner.css';

export default function Banner(props) {
    return (
        <div className='Banner'>
            <img src={props.background} alt="background"/>
            <h2>{props.text }</h2>
        </div>
    );
}