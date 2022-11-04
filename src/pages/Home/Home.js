import React, { useState, useEffect} from 'react';
import './Home.css';
import Card from '../../components/Card/Card';


export default function Home() {
    const [logements, setLogements] = useState([])
    useEffect( () => {
        fetch('logements.json').then((response) =>{
            return response.json();
        }).then((logements) => {
            setLogements(logements)
            console.log('test')
        })
    }, [])

    return (
        <div className='Container'>
            <div className='Home_banner'>
                <h2>Chez vous, partout et ailleurs</h2>
            </div>

            <div className='Location_container'>
                <div className='Card_wrapper'>
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    );
}