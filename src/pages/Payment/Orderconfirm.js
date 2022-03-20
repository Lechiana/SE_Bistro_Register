import React from "react";

const Orderconfirm = ({ image, name, price, type, amount }) => {
  return (
    <div class="grid grid-rows-2 grid-cols-4 gap-4">
      <div class="row-span-3 md:mt-1 mt-4">
        <img src={image} />
      </div>
      <div class="col-span-3 mt-4">
        <h3>{name}</h3>
      </div>
      <div class="row-span-1 sm:col-span-1">
        <h3>{type}</h3>
      </div>
      <div class="row-span-1 sm:col-span-1">
        <h3>{amount}</h3>
      </div>
      <div class="row-span-3 text-secondary">
        <h3>฿ {(amount*price)}</h3>
      </div>
    </div>

    
  );
};

export default Orderconfirm;
