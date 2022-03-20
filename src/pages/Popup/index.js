 import React from 'react';
import './style.css';

const index = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 max-w-screen-sm p-15 container mx-auto my-12 xl">
      <div className="md:block hidden">
        <img className="h-full" src="./images/chiken.png" alt="" />
      </div>

      <div className="flex flex-col bg-gray-500 rounded-r-lg h-full relative mx-20 md:mx-0">
        <div className="bg-neutral rounded-lg m-2 h-full">
          <button className="btn btn-active btn-square btn-sm relative left-60  m-4">
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

          <h3 className="text-center p-2">ไก่ทอด [ Fried Chicken ]</h3>

          <div className=" w-24 h-24 m-auto">
            <img className="p-1" src="./images/logo-4.png" alt="" />
          </div>

          <div className="m-2 p-2">
            <div className="flex">
              <h4 className="text-center text-sm relative left-2">
                ความคิดเห็น
              </h4>
              <img
                className="text-center text-sm absolute right-8 w-15 h-6"
                src="./images/start.png"
                alt=""
              />
            </div>

            <div className="border-white border-solid border text-center "></div>

            <div className="flex">
              <h3 className="p-3 text-sm">ราคา</h3>
              <h3 className="p-3 text-sm absolute right-10">$120</h3>
            </div>

            <div className="border-white border-solid border text-center "></div>

            <div className="flex p-1">
              <h3 className="p-3 text-sm">ขนาด</h3>
              <div className="relative left-1">
                <button className="btn btn-active btn btn-xs h-8 w-14 m-1 ">
                  ปกติ
                </button>
                <button className="btn btn-primary btn btn-xs h-8 w-14 m-1">
                  พิเศษ
                </button>
                <button className="btn btn-active btn btn-xs h-8 w-18 m-1">
                  ใหญ่พิเศษ
                </button>
              </div>
            </div>

            <div className="border-white border-solid border text-center "></div>

            <div className="flex p-1 card-actions ">
              <h3 className="p-3 text-sm">จำนวน</h3>
              <div className="relative left-20 btn-group ">
                <button className=" btn btn-xs btn btn-active text-xl h-8 w-7 m-1">
                  -
                </button>
                <h1 className=" btn btn-xs text-xl h-8 m-1">1</h1>
                <button className="btn btn-xs btn btn-active text-xl h-8 w-7 m-1">
                  +
                </button>
              </div>
            </div>

            <div className="border-white border-solid border text-center "></div>

            <div className="flex p-1">
              <h3 className="p-3 text-sm">ราคารวม</h3>
              <h3 className="p-3 text-sm absolute right-10">$120</h3>
            </div>

            <div className="justify-end card-actions p-3 m-auto">
              <button className="btn btn-active btn btn-sm h-10">ยกเลิก</button>
              <button className="btn btn-primary btn btn-sm h-10">
                เพิ่มตะกร้า
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
