import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function StarRating({ count = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (index) => {
    console.log("click", index);
    setRating(index);
  };

  const handleMouseEnter = (index) => {
    console.log("hover", index);
    setHover(index);
  };

  const handleMouseLeave = () => {
    console.log("leave", rating);
    setHover(rating);
  };

  return (
    <div>
        <p className="text-white font-bold text-4xl pt-10">Star - Rating</p>
      <div className="flex flex-row items-center justify-around w-2/5 m-auto pt-40">
        {[...Array(count)].map((_, i) => {
          i += 1;
          return (
            <FaStar
              className={`${
                i <= (hover || rating) ? "text-yellow-500" : "text-gray-300"
              } cursor-pointer`}
              key={i}
              onClick={() => handleClick(i)}
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={() => handleMouseLeave()}
              size={40}
            />
          );
        })}
      </div>
      <div>
        <p className="pt-20 font-semibold text-3xl text-white"> You rated {rating} star.</p>
      </div>
    </div>
  );
}
