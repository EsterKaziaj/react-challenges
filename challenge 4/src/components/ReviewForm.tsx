import React, { useContext, useState } from "react";
import { RestaurantsContext } from "../context/restaurants";
import { RestaurantInterface } from "../interfaces";

interface Props {
  currentRes: RestaurantInterface;
}

const ReviewForm: React.FC<Props> = ({ currentRes }) => {
  const [comment, setComment] = useState("");
  const [author, setAuthor] = useState("");
  const [stars, setStars] = useState(0);
  const context = useContext(RestaurantsContext);

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();

    if (comment && author && stars) {
      // add it to the backend data
      fetch(`http://localhost:5001/restaurants/${currentRes.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // keeping all other values
          ...currentRes,
          // adding reviews
          reviews: currentRes.reviews + 1,
          reviewsList:
            // if there are already reviews - add to them
            [
              ...currentRes.reviewsList,
              {
                id: currentRes.reviews,
                author,
                comment,
                stars,
              },
            ],
        }),
      })
        .then((res) => res.json())
        .then(() => {
          // update the local data
          context?.handleUpdateRestaurants();
        })
        .catch((err) => alert(err))
        // if everything goes well - then clear the inputs
        .finally(() => {
          setAuthor("");
          setComment("");
          setStars(0);
        });
    }
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <h2>Review form</h2>

      <div className="form-group">
        <label htmlFor="author">Name</label>
        <textarea
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          name="author"
          id="author"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="comment">Comment</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          name="comment"
          id="comment"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="stars">Stars</label>
        <input
          type="range"
          name="stars"
          id="stars"
          step={1}
          max={5}
          min={0}
          value={stars}
          onChange={(e) => setStars(Number(e.target.value))}
        />
      </div>

      <button type="submit" className="btn btn-green">Leave a review</button>
    </form>
  );
};

export default ReviewForm;
