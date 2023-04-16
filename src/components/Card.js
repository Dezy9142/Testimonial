import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

function Card(props) {
  let review = props.review;
  return (
    <div className="flex flex-col md:relative">
      {/* IMAGE */}
      <div class="md:absolute relative md:top-[-7rem] z-[10] mx-auto">
        <img
          className="aspect-square rounded-full w-[140px] h-[140px] z-[25]"
          src={review.image}
        ></img>
         <div className="w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] z-[-10] left-[10px]"></div>
      </div>

      {/* BACK ROUNDED VIOLET DIV */}
     

      {/* nAME  */}
      <div className="text-center mt-7">
        <p className="font-bold tracking-wider text-2xl capitalize ">
          {review.name}
        </p>
        {/* jOB TITLE */}
        <p className="text-violet-300 uppercase">{review.job}</p>
      </div>

      {/* INVERTED COMMA */}
      <div className="text-center text-violet-400 mx-auto mt-5">
        <FaQuoteLeft />
      </div>

      {/* PARAGRAPH */}
      <div className="text-center mt-4 text-gray-500">{review.text}</div>

      {/* INVERTED COMMA */}
      <div className="text-center text-violet-400 mx-auto mt-5">
        <FaQuoteRight />
      </div>
    </div>
  );
}

export default Card;
