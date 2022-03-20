import React from 'react';

const Transaction = ({ id }) => {
  return (
    <div className="bg-gray-600 h-20 m-1">
      <div className="grid grid-cols-4 gap-10 p-7">
        <h4 className="text-xs md:text-base">{id}</h4>
        <h4 className="text-xs md:text-base">อาหาร SE Bistro</h4>
        <h4 className="text-xs md:text-base">30/01/2565</h4>
        <div className="flex justify-center">
          <img className="text-center h-6" src="./images/open.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Transaction;
