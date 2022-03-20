import React from 'react';
import Menu from './Menu';

const index = () => {
  const renderMenu = () => {
    return [...new Array(3)].map((el, index) => (
      <Menu
        key={index}
        image="/images/menu-img-1.png"
        name={'สลัดผักรวมมิตร'}
        size={'ปกติ'}
        price={100}
        amount={1}
        total={200}
      />
    ));
  };
  return (

    <div>

      <h1 className="text-center mx-auto my-8">ตะกร้าสินค้า</h1>
      <hr className="my-8" />
      
      {renderMenu()}
  
      <hr className="my-8" />
      <div className="mx-auto grid grid-cols-5 gap-5 container mx-auto md:grid grid-cols-5 gap-4">
      <div className="col-end-4 md:mx-auto ml-auto">
        <h3 className="">ราคารวม</h3>
      </div>
      <div className="text-center md:col-end-5">
        <h2 className="text-error md:text-left text-right">฿ 549</h2>
      </div>
      <div className="flex justify-end col-end-6 mx-auto">
        <button className="btn bg-primary-focus hover:bg-primary mb-8">
          ชำระเงิน
        </button>
      </div>
      </div>

    </div>

  );
};

export default index;
