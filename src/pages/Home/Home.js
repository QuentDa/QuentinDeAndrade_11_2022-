import React from 'react';
import './Home.css';
import Card from '../../components/Card/Card';
import Banner from '../../components/Banner/Banner';
import Background from './../../assets/img/nature_background.png';

export default function Home() {
    return (
        <div className='Container'>
            <Banner text="Chez vous, partout et ailleurs" background={ Background }/>

            <div className='Location_container'>
                <div className='Location_wrapper'>
                    <Card />
                </div>
            </div>
        </div>
    );
}