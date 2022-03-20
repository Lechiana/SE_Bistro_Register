import React from 'react';

const Menu = ({ name, size, price, total }) => {

  return (
    <div className="mx-auto grid grid-cols-5 gap-5 container mx-auto md:grid grid-cols-5 gap-4 my-8">
      <img src="/images/menu-img-1.png" alt="" className="md:col-span-1 col-span-2" />
    
      <div className="md:col-span-3 col-span-2 grid grid-cols-1 md:grid-cols-3">
        <div className="grid grid-cols-2">
          <h3 className="col-span-2">{name}</h3>
          <h3>{size}</h3>
          <h3 className='md:text-left text-right'>฿ {price}</h3>
        </div>
        <div className='md:col-span-2 grid grid-cols-2 col-span-1'>
          <div className="flex mx-auto md:col-span-1">
            <button className="btn btn-outline-secondary">-</button>
            <h3 className="p-3">2</h3>
            <button className="btn btn-outline-secondary">+</button>
          </div>

          <div className="text-center md:col-span-1">
            <h2 className="text-secondary md:text-left text-right">฿ {total}</h2>
          </div>
        </div>
      </div>

      <div className="md:col-span-1 col-span-1 md:mx-auto ml-auto">
        <button className="btn btn-outline btn-circle btn-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-4 h-4 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>

  );
};

export default Menu;
