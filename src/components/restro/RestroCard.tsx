import React from 'react'
import './restroCard.css';
import StarRating from '../start/StarRating';

interface restro {
  // Define any props you want to pass to the RestroCard component
  restro: {
    id: number;
    name: string;
    description: string;
    image: string;
    rating: number;
  };
}

const RestroCard = ({restro}) => {
  return (
    <div className='cards'>
        <div className='card'>
            <h2>{restro.name}</h2>
            <p>{restro.description}</p>
            <StarRating rating={restro.rating} />
        </div>
    </div>
  )
}

export default RestroCard