
import React from 'react';
import preloaderImg from './preloader.svg';
import './Preloader.css';


export const Preloader = () => {
    return (
        <div className='preloaderWrapper'>
            <div className='preloader'>
                <img src={preloaderImg} alt='' />
            </div>
        </div>
    );
};

