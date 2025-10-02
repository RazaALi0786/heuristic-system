import React from "react";
import { Star } from "lucide-react";


const ReviewCard = ({ values }) => {
  return (
    <>
      {values.map((value, index) => (
        <div
          key={index}
          className="flex flex-col  p-6 bg-white shadow-md rounded-2xl hover:shadow-xl transition-shadow group border border-gray-300"
        >
          <div className="flex  mb-2  duration-300">
            {[...Array(value.rating)].map((_, i) => (
                <Star
                    key={i}
                    size={24}
                    className="text-yellow-500 fill-yellow-500"
                    strokeWidth={2}
                    fill="yelllow"
                />
            ))}
          </div>
          <h3 className="my-4 text-sm italic  text-gray-500">
            "{value.description}"
          </h3>
          <p className="mt-2 font-semibold text-gray-800">{value.name}</p>
          <p className="text-sm text-gray-500">{value.position}</p>
        </div>
      ))}
    </>
  );
};

export default ReviewCard;
