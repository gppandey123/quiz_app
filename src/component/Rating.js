import React from "react";
import StarRatings from "react-star-ratings";

const Rating = ({ index, data }) => {
  const star = data.slice(index, index + 1).map((item, index) => {
    if (item.difficulty === "hard") {
      return (
        <StarRatings
          key={index}
          starRatedColor="black"
          rating={3}
          starDimension="20px"
          starSpacing="15px"
        />
      );
    } else if (item.difficulty === "easy") {
      return (
        <StarRatings
          key={index}
          starRatedColor="black"
          rating={1}
          starDimension="20px"
          starSpacing="15px"
        />
      );
    } else {
      return (
        <StarRatings
          key={index}
          starRatedColor="black"
          rating={2}
          starDimension="20px"
          starSpacing="15px"
        />
      );
    }
  });
  return <>{star}</>;
};

export default Rating;
