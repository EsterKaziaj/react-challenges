import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { RestaurantsContext } from "../context/restaurants";
import RestaurantCard from "./RestaurantCard";

const CuisineDetail: React.FC = () => {
  let { name } = useParams();

  const context = useContext(RestaurantsContext);

  const cuiRes = context?.restaurants?.filter(
    (res) => res.restauranttype === name
  );

  return (
    <div className="container">
      <h1>{name} restaurants</h1>
      <div className="flex">
        {cuiRes?.map((res) => (
          <RestaurantCard key={`res-by-cui-${res.id}`} res={res} />
        ))}
      </div>
    </div>
  );
};

export default CuisineDetail;
