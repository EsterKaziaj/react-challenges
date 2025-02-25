import React from "react";
import RestaurantCard from "./RestaurantCard";
import { useStore } from "../store";

const Favorites: React.FC = () => {
  const { favorites } = useStore();

  return (
    <div className="container">
      {favorites?.length > 0 ? (
        <>
          <h1>Your favorite restaurants</h1>
          {favorites.map((favRes) => (
            <RestaurantCard key={`fav-res-${favRes.id}`} res={favRes} />
          ))}
        </>
      ) : (
        <p>There are currently no favorites in your pocket.</p>
      )}
    </div>
  );
};

export default Favorites;
