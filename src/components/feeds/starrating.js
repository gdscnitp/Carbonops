import React, { useState } from "react";
import styles from "./Card.module.css";

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div className={styles.starratings}>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <div className={styles.btns}>
            <button
              type="button"
              key={index}
              className={styles['index <= (hover || rating) ? "on" : "off"']}
              onClick={() => setRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            >
              <span className="star">&#9733;</span>
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default StarRating;
