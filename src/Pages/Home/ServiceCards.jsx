import React from 'react';
import floride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import teeth from '../../assets/images/whitening.png'
import ServiceCard from './ServiceCard';
const ServiceCards = () => {
    const cardData =[
        {
            id:1,
            name:'Fluoride Treatment',
            des:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon:floride
        },
        {
            id:2,
            name:'Cavity Filling',
            des:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon:cavity
        },
        {
            id:3,
            name:'Teeth Whitening',
            des:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon:teeth
        },
    ]
    return (
        <section className='my-9'>
        <div className='text-center py-8 text-xl font-bold'>
            <h2 className='text-primary py-3'>Our Services</h2>
            <p className='text-3xl mb-20'>Services We Provide</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                cardData.map(card=><ServiceCard
                key={card.id}
                card={card}
                ></ServiceCard>)
            }
        </div>
        </section>
    );
};

export default ServiceCards;