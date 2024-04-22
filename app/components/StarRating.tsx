import React from 'react';
import { TiStarFullOutline } from 'react-icons/ti';

const StarRating = ({ rating }: { rating: any }) => {
  // If starRating is null or undefined, display a message
  if (rating === null || rating === undefined) {
    return <span className="text-md italic mb-3">No ratings yet</span>;
  }

  // Convert the starRating string to a number
  const numericRating = parseFloat(rating);

  // Check if the conversion resulted in a valid number
  if (isNaN(numericRating)) {
    return <span className="text-xl">Invalid rating</span>;
  }

  // Round the numeric rating to the nearest integer
  const roundedRating = Math.round(numericRating);

  // Create an array with the length of the rounded rating
  const stars = Array.from({ length: roundedRating });

  return (
    <span className="self-center flex text-xl text-[#36402D] w-full mb-2">
      {stars.map((_, index) => (
        <TiStarFullOutline
          key={index}
          size={45}
          className="fill-[#C2ECCD] border-1 border-black"
        />
      ))}
    </span>
  );
};

export default StarRating;
