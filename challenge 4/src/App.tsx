import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RestaurantsProvider } from "./context/restaurants";
import PopularRestaurants from "./components/PopularRestaurants";
import Header from "./components/Header";
import RestaurantDetail from "./components/RestaurantDetail";
import NotFound from "./components/NotFound";
import SurpriseRestaurant from "./components/SurpriseRestaurant";
import Cuisines from "./components/Cuisines";
import CuisineDetail from "./components/CuisineDetail";
import Favorites from "./components/Favorites";
import AllRestaurants from "./components/AllRestaurants";
import Footer from "./components/Footer";

const App: React.FC = () => {
  // https://dribbble.com/tags/restaurant_finder
  return (
    <>
      <RestaurantsProvider>
        <Router>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <SurpriseRestaurant />
                  <PopularRestaurants />
                  <Cuisines />
                  <AllRestaurants />
                </>
              }
            />
            <Route path="/restaurant-:slug" element={<RestaurantDetail />} />
            <Route path="/cuisine-:name" element={<CuisineDetail />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      </RestaurantsProvider>
    </>
  );
};

export default App;
