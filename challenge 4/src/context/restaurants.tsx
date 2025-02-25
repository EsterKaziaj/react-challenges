import React, { createContext, useEffect, useState } from "react";
import { RestaurantInterface } from "../interfaces";

interface Props {
  children: React.ReactNode;
}

interface ContextData {
  restaurants: RestaurantInterface[];
  handleUpdateRestaurants: () => void;
}

export const RestaurantsContext = createContext<ContextData | null>(null);

export const RestaurantsProvider: React.FC<Props> = ({ children }) => {
  const [restaurants, setRestaurants] = useState<RestaurantInterface[]>();

  // fetch the restaurants at first
  useEffect(() => {
    fetch("http://localhost:5001/restaurants")
      .then((res) => res.json())
      .then((data) => setRestaurants(data));
  }, []);

  // used to update the local restaurants every time we add review to it
  const handleUpdateRestaurants = () => {
    fetch("http://localhost:5001/restaurants")
      .then((res) => res.json())
      .then((data) => setRestaurants(data));
  };

  const contextObj: ContextData = {
    // before filtering
    restaurants: restaurants && restaurants?.length > 0 ? restaurants : [],
    handleUpdateRestaurants,
  };

  return (
    <RestaurantsContext.Provider value={contextObj}>
      {children}
    </RestaurantsContext.Provider>
  );
};
