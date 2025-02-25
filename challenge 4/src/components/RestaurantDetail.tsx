import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { RestaurantsContext } from "../context/restaurants";
import NotFound from "./NotFound";
import ReviewForm from "./ReviewForm";

const RestaurantDetail: React.FC = () => {
  let { slug } = useParams();
  const context = useContext(RestaurantsContext);

  const currentRes = context?.restaurants?.find((res) => res.slug === slug);

  const starsSum =
    currentRes &&
    currentRes.reviewsList.length > 0 &&
    currentRes?.reviewsList
      .map((review) => review.stars)
      .reduce((a, b) => a + b);

  // if there is a restaurant - show it
  if (currentRes) {
    return (
      <div className="container">
        <h1>{currentRes.businessname}</h1>
        <div className="res-details">
          <img
            src={currentRes.image}
            alt={currentRes?.businessname}
            width="500px"
          />
          <div className="content">
            {starsSum && (
              <p>
                rating - {starsSum / currentRes.reviews}, <br />{" "}
                <small>based on {currentRes.reviews} reviews</small>
              </p>
            )}
            <p>
              <a href={`tel:${currentRes.phone}`}>{currentRes.phone}</a>
            </p>
            <p>
              <a href={`mailto:${currentRes.email}`}>{currentRes.email}</a>
            </p>
            <p>{currentRes.address}</p>
            {currentRes.parkinglot && (
              <p>We have a parking lot waiting for you</p>
            )}
          </div>
        </div>

        {currentRes?.reviewsList.length > 0 && (
          <div className="reviews-cont">
            <h2>Reviews</h2>
            {currentRes.reviewsList.map((rw) => (
              <div className="review" key={`review-${rw.id}`}>
                <p>
                  <b>Author:</b> {rw.author}
                </p>
                <p>
                  <b>Message:</b> {rw.comment}
                </p>
                <p>
                  <b>Stars:</b> {rw.stars}
                </p>
              </div>
            ))}
          </div>
        )}

        <ReviewForm currentRes={currentRes} />
      </div>
    );
  }

  // else - show not found route
  return <NotFound />;
};

export default RestaurantDetail;
