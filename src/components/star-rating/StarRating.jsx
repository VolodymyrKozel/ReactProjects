import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./StarRating.css";
export default function StarRating({ numOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(currentIndex) {
    console.log(rating);
    currentIndex === 1 && rating === 1 ? setRating(0) : setRating(currentIndex);
  }
  function handleMouseEnter(currentIndex) {
    setHover(currentIndex);
  }
  function handleMouseLeave() {
    setHover(rating);
  }

  return (
    <div className="star-rating">
      {[...Array(numOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            className={index <= (hover || rating) ? "active" : "inactive"}
            key={index}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
          />
        );
      })}
    </div>
  );
}
