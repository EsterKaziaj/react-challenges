import React from "react";
import { Link } from "react-router-dom";
import { RestaurantInterface } from "../interfaces";
import { useStore } from "../store";

const RestaurantCard: React.FC<{ res: RestaurantInterface }> = ({ res }) => {
  const { addToFavorites, removeFromFavorites, favorites } = useStore();

  const isFavorite = favorites.find((favRes) => favRes.id === res.id);

  const starsSum =
    res.reviewsList.length > 0 &&
    res?.reviewsList.map((review) => review.stars).reduce((a, b) => a + b);

  return (
    <div className="res">
      <Link to={`/restaurant-${res.slug}`} className="res-inner">
        {/* replace with heart */}
        <button
          onClick={(e) => {
            e.preventDefault();
            isFavorite ? removeFromFavorites(res.id) : addToFavorites(res);
          }}
          className="btn-fav"
        >
          {isFavorite ? (
            <i className="fas fa-heart"></i>
          ) : (
            <i className="far fa-heart"></i>
          )}
        </button>
        <picture>
          <img src={res.image} alt={res.businessname} />
        </picture>
        <div className="content">
          <p className="business-name">{res.businessname}</p>
          <p className="restaurant-type">{res.restauranttype}</p>
          {starsSum && (
            <p>
              rating - {starsSum / res.reviews}, <br />{" "}
              <small>based on {res.reviews} reviews</small>
            </p>
          )}
        </div>
      </Link>
    </div>
  );
};

export default RestaurantCard;
