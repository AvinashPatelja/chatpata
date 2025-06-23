import React from "react";
import "./restroCard.css";
import StarRating from "../start/StarRating";
import ImageComponent from "../image/ImageComponent";

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

const RestroCard = ({ restro }) => {
  return (
    <div className="cards">
      <div className="card">
        <div className="card-content">
          <h2>{restro.name}</h2>
          <p>Rating: {restro.rating}</p>
          <StarRating rating={restro.rating} />
        </div>
        <div className="card-image">
          <ImageComponent src={restro.image} size={100} />          
          <p>{restro.description}</p>
        </div>
      </div>
    </div>
  );
};

export default RestroCard;
