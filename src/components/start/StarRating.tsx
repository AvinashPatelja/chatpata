import React from 'react';
import { FaStar } from 'react-icons/fa';

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const totalStars = 5; // Define the maximum number of stars

  return (
    <div className="star-rating">
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <FaStar
            key={index}
            color={starValue <= rating ? "#ffc107" : "#e4e5e9"} // Gold for filled, light grey for empty
            size={24} 
          />
        );
      })}
    </div>
  );
};

export default StarRating;