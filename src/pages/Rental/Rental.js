import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Rentals from './../../assets/data/logements.json'
import Carousel from '../../components/Carousel/Carousel';
import Tag from './../../components/Tag/Tag';
import Rating from '../../components/Rating/Rating';
import Collapsible from './../../components/Collapsible/Collapsible'
import './Rental.css';

export default function Rental() {
    const { id } = useParams(); // On récupère l'id envoyé en paramètres dans le NavLink de Card.js, puis passé en paramètre router dans index.js 
    const foundRental = Rentals.find(element => {
        return element.id === id;
    });
    const navigate = useNavigate();
    
    if (!foundRental) {
        useEffect(() => {
            navigate('/404')
        })
        return;
    }
    
    const slides = foundRental.pictures;
    const rating = foundRental.rating;
    const tags = foundRental.tags;
    const description = foundRental.description
    const equipments = foundRental.equipments

    return (
        <div className='Container'>
            <div className='Carousel_container'>
                <Carousel slides={slides} />
            </div>

            <div className='Info_container'>
                <div className='Name_wrapper'>
                    <h2>{foundRental.title}</h2>
                    <span>{foundRental.location}</span>
                    <div>
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

            <div className='Description_container'>
                <Collapsible title="Description" description={description} />
                <Collapsible title="Equipements" 
                description= {
                    <ul className='Rental_equipments'>
                        {
                            equipments.map(equipment => {
                                return(
                                    <li key={equipment}>{equipment}</li>
                                )
                            })
                        }
                    </ul>
                }
                
                />
            </div>
        </div>
    )
}