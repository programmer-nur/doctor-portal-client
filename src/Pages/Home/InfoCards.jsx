import InfoCard from './InfoCard';
import React from 'react';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'
const InfoCards = () => {
    const cardData =[
    {
        id:1,
        name:'Opening Hour',
        des: 'Open 9:00 am to 4:00 pm everyday',
        icon:clock,
        bgClass:'bg-primary'
    },
    {
        id:2,
        name:'Visit Our Location',
        des: 'Open 9:00 am to 4:00 pm everyday',
        icon:marker,
        bgClass:'bg-accent'
    },
    {
        id:3,
        name:'Contact Us',
        des: 'Open 9:00 am to 4:00 pm everyday',
        icon:phone,
        bgClass:'bg-primary'
    },
]
    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-3'>
            {
                cardData.map(card=><InfoCard
                key={card.id}
                card={card}               
                />)
            }
        </div>
    );
};

export default InfoCards;