import React from "react";
import "../restro/RestroCard.css"
import StarRating from "../start/StarRating";
import ImageComponent from "../image/ImageComponent";

interface item {
  // Define any props you want to pass to the RestroCard component
  item: {
    id: number;
    name: string;
    description: string;
    image?: string;
    rating?: number;
  };
}

const Card = ({ item }) => {
  return (
    <div className="cards">
      <div className="card">
        <div className="card-content">
          <h2>{item.name}</h2>
          <p>Rating: {item.rating}</p>
          <StarRating rating={item.rating} />
        </div>
        {item.image && (
          <div className="card-image">
            <ImageComponent src={item.image} size={100} />
            <p>{item.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
