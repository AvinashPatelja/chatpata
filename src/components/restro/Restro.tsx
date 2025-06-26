import ImageComponent from "../image/ImageComponent";
import StarRating from "../start/StarRating";

interface RestroProps {
  id: number;
  name: string;
  description: string;
  image: string;
  rating: number;
  cuisine: string;
  location: string;
  deliveryTime: string;
  priceRange: string;
  popularDishes: string[];
}
const Restro = ({
  name,
  description,
  image,
  rating,
  cuisine,
  location,
  deliveryTime,
  priceRange,
  popularDishes,
}: RestroProps) => {
  console.log({
    name,
    description,
    image,
    rating,
    cuisine,
    location,
    deliveryTime,
    priceRange,
    popularDishes,
  });
  return (
    <div className="restro-detail">
      <h2 style={{color:'black', marginLeft:'-50%', fontStyle:'italic', fontFamily:'fantasy'}}>{name}</h2>
      <div className="restro-detail-card">
        <div className="restro-image-rating">
          <ImageComponent src={image} alt={name} size={200} />
          <p>Rating:</p>
          <StarRating rating={rating} />
        </div>

        <div className="restro-info-container">
          <div className="restro-detail-info">
            <h4>Cuisine:</h4>
            <p>{cuisine}</p>
            <h4>Delivery Time:</h4>
            <p>{deliveryTime}</p>
            <h4>Description:</h4>
            <p>{description}</p>
          </div>

          <div className="restro-detail-info">
            <h4>Location:</h4>
            <p>{location}</p>
            <h4>Price Range:</h4>
            <p>{priceRange}</p>
            <h4>Popular Dishes:</h4>
            <p>{popularDishes.join(", ")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restro;
