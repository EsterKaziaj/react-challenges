import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { RestaurantsContext } from "../context/restaurants";

const SurpriseRestaurant: React.FC = () => {
  const context = useContext(RestaurantsContext);

  const currentRes =
    context?.restaurants &&
    context.restaurants[Math.floor(Math.random() * context.restaurants.length)];

  return (
    <div className="container">
      <h2>Don't know what to eat?</h2>
      <Link to={`/restaurant-${currentRes?.slug}`} className="btn btn-green">Surprise me!</Link>
    </div>
  );
};

export default SurpriseRestaurant;
