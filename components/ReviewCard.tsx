"use client";
import React from "react";
import { Star } from "lucide-react";

interface Review {
  rating: number;
  description: string;
  name: string;
  position: string;
}

interface ReviewCardProps {
  values: Review[];
}

const ReviewCard: React.FC<ReviewCardProps> = ({ values }) => {
  return (
    <>
      {values.map((value, index) => (
        <div
          key={index}
          className="flex flex-col p-6 transition-shadow bg-white border border-gray-300 shadow-md rounded-2xl hover:shadow-xl group hover:border-orange-200"
        >
          {/* Stars */}
          <div className="flex mb-2 duration-300">
            {[...Array(value.rating)].map((_, i) => (
              <Star
                key={i}
                size={24}
                className="text-orange-500 fill-orange-500"
                strokeWidth={2}
                fill="orange"
              />
            ))}
          </div>

          {/* Description */}
          <h3 className="my-4 text-sm italic text-gray-500">
            "{value.description}"
          </h3>

          {/* Name & Position */}
          <p className="mt-2 font-semibold text-gray-800">{value.name}</p>
          <p className="text-sm text-gray-500">{value.position}</p>
        </div>
      ))}
    </>
  );
};

export default ReviewCard;
