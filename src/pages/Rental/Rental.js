import React from 'react';
import { useParams } from 'react-router-dom';
import Rentals from './../../assets/data/logements.json'
import './Rental.css';

export default function Rental() {
    const { id } = useParams(); // On récupère l'id envoyé en paramètres dans le NavLink de Card.js, puis passé en paramètre router dans index.js 
    const foundRental = Rentals.find(element => {
        return element.id === id;
    })

    return (
        <div>
            je suis sur la rental {foundRental.title}
        </div>
    )
}