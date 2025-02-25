import React, { useContext } from "react";
import { RestaurantsContext } from "../context/restaurants";
import RestaurantCard from "./RestaurantCard";

const AllRestaurants: React.FC = () => {
  const context = useContext(RestaurantsContext);

  return (
    <div className="container">
      <h2>All restaurants</h2>
      <div className="flex">
        {context?.restaurants?.map((res) => (
          <RestaurantCard res={res} key={`all-res-${res.id}`} />
        ))}
      </div>
    </div>
  );
};

export default AllRestaurants;
