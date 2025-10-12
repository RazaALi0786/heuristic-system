"use client";
import React, { ReactNode } from "react";

interface CardValue {
  icon: ReactNode;
  title: string;
  description: string;
}

interface ReusableCardGridProps {
  values: CardValue[];
}

const ReusableCardGrid: React.FC<ReusableCardGridProps> = ({ values }) => {
  return (
    <>
      {values.map((value, index) => (
        <div
          key={index}
          className="flex flex-col items-center p-6 text-center transition-shadow bg-white border border-gray-300 shadow-lg rounded-2xl hover:shadow-xl group hover:border-orange-200"
        >
          <div className="flex justify-center mb-2 transition-transform duration-300 transform group-hover:scale-110">
            {value.icon}
          </div>
          <h3 className="my-4 text-xl font-semibold text-gray-600">
            {value.title}
          </h3>
          <p className="mt-2 text-gray-800">{value.description}</p>
        </div>
      ))}
    </>
  );
};

export default ReusableCardGrid;
