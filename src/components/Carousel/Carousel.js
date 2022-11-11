import React, { useState} from 'react';
import ArrowDown from './../../assets/svg/arrow_down.svg'
import './Carousel.css';

export default function Carousel({ slides }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slideStyles = {
        width: '100%',
        height: '100%',
        borderRadius: '25px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url(${slides[currentIndex]})`
    }
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex -1;
        setCurrentIndex(newIndex);
    };
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length -1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }
    const showCounter = currentIndex + 1 + "/" + slides.length

    return (
        <div className='Slider_style'>
            <div className='Arrow_left' onClick={goToPrevious}><img src={ ArrowDown } alt="flèche gauche" /></div>
            <div className='Arrow_right' onClick={goToNext}><img src={ ArrowDown } alt="flèche droite" /></div>
            <div style={slideStyles}></div>
            <div className='Counter'>
                {showCounter}
            </div>
        </div>
    );
}