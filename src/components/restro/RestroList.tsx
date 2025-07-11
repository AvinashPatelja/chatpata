import { useState } from "react";
import Card from "../component/Card";
import Search from "../component/Search";
import restaurants from "../../mock/Restaurants";

// interface restorentsProps {
//   id: number;
//   name: string;
//   description: string;
//   image: string;
//   rating: number;
//   cuisine: string;
//   location: string;
//   deliveryTime: string;
//   priceRange: string;
//   popularDishes: string[];
// }

const RestroList = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);

  const handleSearch = (searchTerm: string) => {
    const newFilteredList = restaurants.filter((restro) =>
      restro.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRestaurants(newFilteredList);
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <Search
          onSearch={handleSearch}
          placeholder="Search for restaurants..."
        />
      </div>
      {filteredRestaurants.length > 0 ? (
        <div className="restro-list">
          {filteredRestaurants.map((restro) => (
            <div key={restro.id} className="restro-card">
              <Card item={restro} />
            </div>
          ))}
        </div>
      ) : (
        <p>No restros found</p>
      )}
    </>
  );
};

export default RestroList;
