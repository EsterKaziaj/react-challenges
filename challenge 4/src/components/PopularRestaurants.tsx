import React, { useContext } from "react";
import { RestaurantsContext } from "../context/restaurants";
import RestaurantCard from "./RestaurantCard";

const PopularRestaurants: React.FC = () => {
  const context = useContext(RestaurantsContext);

  const popularRes = context?.restaurants
    ?.sort((a, b) => b.reviews - a.reviews)
    .slice(0, 10);

  return (
    <div className="container">
      <h2>Our most popular restaurants</h2>
      <div className="flex">
        {popularRes?.map((res) => (
          <RestaurantCard key={`popular-${res.id}`} res={res} />
        ))}
      </div>
    </div>
  );
};

export default PopularRestaurants;
