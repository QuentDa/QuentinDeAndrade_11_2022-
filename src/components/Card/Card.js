import React from 'react';
import { NavLink } from 'react-router-dom';
import Rentals from './../../assets/data/logements.json'

import './Card.css';


export default function Card() {
    return (
        <div className='Card_wrapper'>
                {
                    Rentals && Rentals.map(rental => {
                        return(
                            <NavLink to={'/Rental/' + rental.id}>
                                <div className='Card' key={ rental.id }>                           
                                        <img src={rental.pictures[0]} alt="logement"/>
                                        <span>
                                            { rental.title }
                                        </span>               
                                </div>
                            </NavLink>   
                        )
                    })
                }
        </div>
    );
}