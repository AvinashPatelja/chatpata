import { Link } from "react-router-dom";
import ImageComponent from "../image/ImageComponent";
import StarRating from "../start/StarRating";
import data from "../../mock/Data.json";
import ItemDetailsCard from "../component/ItemDetailsCard";
import Search from "../component/Search";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { useState } from "react";

interface Item {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
  [key: string]: unknown; // Add this if there are additional properties
}

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
  id,
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

  const [filteredDishes, setFilteredDishes] = useState(data.items);
  

  const filteredItems: Item[] = filteredDishes.filter(
    (item) => item.category === id.toString()
  );

  const handleSearch = (searchTerm: string) => {
    const newFilteredItems = filteredDishes.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    // Update the state or perform any action with newFilteredItems
    setFilteredDishes(newFilteredItems);
  };
  return (
    <div>
      <div className="restro-detail">
        <Link to="/">Home</Link> / Restaurants
        <h2
          style={{
            color: "black",
            marginLeft: "-50%",
            fontStyle: "italic",
            fontFamily: "fantasy",
          }}
        >
          {name}
        </h2>
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
        {/* Render Items by Category */}
        <div className="category-items">          
          <h3 style={{ textAlign: "center", marginTop: "20px", color: "black" }}>
            MENU <MenuBookIcon style={{ fontSize: "20px", color: "black", marginLeft: "10px" }} />
          </h3>
          <div className="restro-list">
            <div style={{ textAlign: "center", width: "80%" }}>
            <Search
              onSearch={handleSearch}
              placeholder="Search for dishes..."
            />
          </div>
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="restro-card"
                  style={{ marginBottom: "40px", justifyItems: "center" }}
                >
                  <ItemDetailsCard item={item} />
                </div>
              ))
            ) : (
              <p>No items found in this category.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restro;
