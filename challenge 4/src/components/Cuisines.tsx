import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { RestaurantsContext } from "../context/restaurants";

const Cuisines: React.FC = () => {
  const context = useContext(RestaurantsContext);

  // using new Set to flatten the array - no duplicates
  const cuisines = Array.from(
    new Set(context?.restaurants?.map((res) => res.restauranttype))
  );

  return (
    <div className="container">
      <h2>Cuisines</h2>
      <div className="flex state-center">
        {cuisines.map((cui, i) => (
          <Link
            to={`/cuisine-${cui}`}
            className="btn btn-cuisine"
            key={`cuisine-${i}`}
          >
            {cui}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Cuisines;
