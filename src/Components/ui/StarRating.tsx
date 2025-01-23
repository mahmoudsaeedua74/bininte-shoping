import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
const StarRating = () => {
  return (
    <div className="flex">
      {Array.from({ length: 5 }).map((_, index) => (
        <span key={index}>
          {index < 4 ? (
            <AiFillStar className="text-[#FFC600]" size={20} />
          ) : (
            <AiOutlineStar className="text-[#C1C8CE]" size={20} />
          )}
        </span>
      ))}
    </div>
  );
};
export default StarRating;
