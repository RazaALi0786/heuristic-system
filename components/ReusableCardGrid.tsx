import React from "react";


const ReusableCardGrid = ({ values }) => {
  return (
    <>
      {values.map((value, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-2xl hover:shadow-xl transition-shadow group border border-gray-300"
        >
          <div className="flex justify-center mb-2 transform transition-transform duration-300 group-hover:scale-110">
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
