import React from 'react';
import { useParams } from 'react-router-dom';
import Rentals from './../../assets/data/logements.json'
import Carousel from '../../components/Carousel/Carousel';
import Tag from './../../components/Tag/Tag';
import Rating from '../../components/Rating/Rating';
import './Rental.css';

export default function Rental() {
    const { id } = useParams(); // On récupère l'id envoyé en paramètres dans le NavLink de Card.js, puis passé en paramètre router dans index.js 
    const foundRental = Rentals.find(element => {
        return element.id === id;
    });
    const slides = foundRental.pictures;
    const rating = foundRental.rating;
    const tags = foundRental.tags;

    return (
        <div className='Container'>
            <div className='Carousel_container'>
                <Carousel slides={slides} />
            </div>

            <div className='Info_container'>
                <div className='Name_wrapper'>
                    <h2>{foundRental.title}</h2>
                    <span>{foundRental.location}</span>
                    <div className='Tag_wrapper'>
                        <Tag tags={tags} />
                    </div>
                </div>
                <div className='Host_wrapper'>
                    <div className='Host_profile'>
                        <span>{foundRental.host.name}</span>
                        <img src={foundRental.host.picture} alt="profil de l'host"></img>
                    </div>
                    <div className='Host_rating'>
                        <Rating rating={rating} />
                    </div>
                </div>
            </div>
        </div>
    )
}