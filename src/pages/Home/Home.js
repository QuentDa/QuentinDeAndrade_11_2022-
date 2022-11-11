import React from 'react';
import './Home.css';
import Card from '../../components/Card/Card';
import Banner from '../../components/Banner/Banner';
import Background from './../../assets/img/nature_background.png';
import Rentals from './../../assets/data/logements.json'

export default function Home() {
    return (
        <div className='Container'>
            <Banner text="Chez vous, partout et ailleurs" background={ Background }/>

            <div className='Location_container'>
                <div className='Location_wrapper'>
                    <div className='Card_wrapper'>
                        {
                            Rentals && Rentals.map(rental => {
                                return (
                                    <Card Link={'/Rental/' + rental.id} key={ rental.id } Picture={rental.pictures[0]} Alt={rental.title} Title={rental.title} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}