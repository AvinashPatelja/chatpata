import { useLocation, useNavigate } from "react-router-dom";
import Restro from "./Restro";
import { useEffect } from "react";

const RestroWrapper = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const restro = location.state?.item;

  useEffect(() => {
    if (!restro) {
      navigate("/"); // go back if no data found
    }
  }, [restro, navigate]);

  if (!restro) return null;

  return (
    <Restro
      id={restro.id}
      name={restro.name}
      description={restro.description}
      image={restro.image}
      rating={restro.rating}
      cuisine={restro.cuisine}
      location={restro.location}
      deliveryTime={restro.deliveryTime}
      priceRange={restro.priceRange}
      popularDishes={restro.popularDishes}
    />
  );
};

export default RestroWrapper;
