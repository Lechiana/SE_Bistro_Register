import React from 'react';
import Transaction from './Transaction';

const index = () => {
  return (
    <div className="text-center mx-auto ">
      <h1 className="font-bold pt-10 p-2 flex justify-center ">
        ประวัติการสั่งซื้อ
      </h1>
      <div className="border-soild p-48 pt-4">
        <div className="bg-base-200 h-19 drop-shadow rounded-t-lg">
          <div className="grid grid-cols-4 gap-10 p-7">
            <h4 className="text-base md:text-xl">ลำดับ</h4>
            <h4 className="text-base md:text-xl">หัวข้อ</h4>
            <h4 className="text-base md:text-xl">วันที่สั่ง</h4>
            <h4 className="text-base md:text-xl">รายละเอียด</h4>
          </div>
        </div>

        {[...new Array(5)].map((el, index) => (
          <Transaction id={index + 1} />
        ))}
      </div>
    </div>
  );
};

export default index;
