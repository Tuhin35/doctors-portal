import React from 'react';
import fluoride from '../../../../assets/images/fluoride.png'
import cavity from '../../../../assets/images/cavity.png'
import whitening from '../../../../assets/images/whitening.png'
import Service from './Service';
const Services = () => {

    const cardData = [
        {
            id:1,
            name: "Fluoride Treatment",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, illo.",
            img: fluoride,

        },
        {
            id:2,
            name: "Cavity Filling",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, illo.",
            img: cavity,

        },
        {
            id:1,
            name: "Teeth Whitening",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, illo.",
            img: whitening,

        }
    ]

    return (

        <div className='mt-16'>
            <h1 className='text-primary text-xl text-center uppercase'>Our Services</h1>
            <h1 className='text-5xl text-center'>Services We Provide</h1>
            <div className='grid grid-cols-1  md:grid-cols-3 gap-6'>
            {
                cardData.map(card=><Service
                key={card.id}
                card={card}
                ></Service>)
            }
            
        </div>
        </div>
    );
};

export default Services;