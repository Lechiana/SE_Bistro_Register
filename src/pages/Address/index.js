import React, { useState } from 'react';
import Map from '../../components/LongdoMap/Map';

const Address = () => {
  const [coordinate, setCoordinate] = useState({});

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      console.log(lat, long);

      setCoordinate({ lat, long });
    });
  };

  return (
    <div className="container mx-auto">
      <div className="bg-base-200 p-8 mt-8 my-5 max-w-5xl mx-auto rounded-box">
        <div className="text-center">
          <h2 className="mt-4">เพิ่มที่อยู่</h2>
          <hr className="mt-6"></hr>
        </div>
        <div class="grid grid-flow-rows gap-2 md:grid-col-3 md:grid-flow-col ">
          <div className="col-span-3 md:col-span-2 md:row-span-5 mt-5 mx-auto">
            <img
              src="/images/profile.png"
              className="mask mask-hexagon-2"
              alt=".."
            />
          </div>
          <div class="col-span-3 md:col-span-3 mt-4 ml-1 md:ml-5">
            <div class="text-sm breadcrumbs">
              <ul>
                <li>
                  <a href="/">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.79123 3.66181C9.50589 3.11965 10.4941 3.11965 11.2088 3.66181L15.8132 7.15479C16.5608 7.72199 17 8.60639 17 9.54486V15C17 16.1046 16.1046 17 15 17H13C11.8954 17 11 16.1046 11 15V11.5H9V15C9 16.1046 8.10457 17 7 17H5C3.89543 17 3 16.1046 3 15V9.54486C3 8.60639 3.43917 7.72199 4.18684 7.15479L8.79123 3.66181ZM14.6044 8.74817L10 5.25519L5.39561 8.74817C5.14639 8.93724 5 9.23204 5 9.54486V15H7V11.5C7 10.3954 7.89543 9.5 9 9.5H11C12.1046 9.5 13 10.3954 13 11.5V15L15 15V9.54486C15 9.23204 14.8536 8.93724 14.6044 8.74817Z"
                        fill="white"
                      ></path>
                    </svg>
                    หน้าแรก
                  </a>
                </li>
                <li>
                  <a href="/Profile">ข้อมูลส่วนตัว</a>
                </li>
                <li>เพิ่มที่อยู่</li>
              </ul>
            </div>
          </div>
          <div class="col-span-3 md:col-span-3 ml-1 md:ml-5">
            <div className="text-left">
              <hr className="mt-3"></hr>
            </div>
            <div className="grid grid-cols-2">
              <h3 className="mt-4">เพิ่มที่อยู่</h3>
            </div>
            <div className="grid grid-cols-3 grid-flow-col mt-2">
              <div className="col-span-1 mt-4">
                <h6>ชื่อที่อยู่</h6>
              </div>
              <div className="col-span-2">
                <div className="form-control w-3/4">
                  <input
                    type="text"
                    placeholder="ชื่อที่อยู่"
                    className="input input-bordered"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 grid-flow-col mt-2">
              <div className="col-span-1 mt-4">
                <h6>ที่อยู่</h6>
              </div>
              <div className="col-span-2">
                <div className="form-control w-3/4">
                  <input
                    type="text"
                    placeholder="ที่อยู่"
                    className="input input-bordered"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 grid-flow-col mt-2">
              <div className="col-span-1 mt-4">
                <h6>ตำบล</h6>
              </div>
              <div className="col-span-2">
                <div className="form-control w-3/4">
                  <input
                    type="text"
                    placeholder="ตำบล"
                    className="input input-bordered"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 grid-flow-col mt-2">
              <div className="col-span-1 mt-4">
                <h6>อำเภอ</h6>
              </div>
              <div className="col-span-2">
                <div className="form-control w-3/4">
                  <input
                    type="text"
                    placeholder="อำเภอ"
                    className="input input-bordered"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 grid-flow-col mt-2">
              <div className="col-span-1 mt-4">
                <h6>จังหวัด</h6>
              </div>
              <div className="col-span-2">
                <div className="form-control w-3/4">
                  <input
                    type="text"
                    placeholder="จังหวัด"
                    className="input input-bordered"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 grid-flow-col mt-2">
              <div className="col-span-1 mt-4">
                <h6>รหัสไปรษณีย์</h6>
              </div>
              <div className="col-span-2">
                <div className="form-control w-3/4">
                  <input
                    type="text"
                    placeholder="รหัสไปรษณีย์"
                    className="input input-bordered"
                  />
                </div>
              </div>
            </div>
            <div className="text-center">
              <hr className="mt-6"></hr>
            </div>
            <div className="flex justify-end mr-14 md:mr-10 mx-auto">
              <button
                id="get-location"
                className="btn bg-secondary hover:bg-secondary-focus mt-8 w-52 "
                onClick={getLocation}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 27 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.3879 2.57143C16.9193 2.57143 19.8087 4.88571 19.8087 7.71429C19.8087 10.4143 16.4378 14.7857 13.3879 17.8714C10.3381 14.6571 6.96715 10.4143 6.96715 7.71429C6.96715 4.88571 9.8565 2.57143 13.3879 2.57143ZM13.3879 0C8.09079 0 3.75677 3.47143 3.75677 7.71429C3.75677 13.5 13.3879 21.8571 13.3879 21.8571C13.3879 21.8571 23.0191 13.3714 23.0191 7.71429C23.0191 3.47143 18.685 0 13.3879 0ZM13.3879 5.14286C11.6222 5.14286 10.1775 6.3 10.1775 7.71429C10.1775 9.12857 11.6222 10.2857 13.3879 10.2857C15.1536 10.2857 16.5983 9.12857 16.5983 7.71429C16.5983 6.3 15.1536 5.14286 13.3879 5.14286ZM26.2294 21.8571C26.2294 24.6857 20.4508 27 13.3879 27C6.32508 27 0.546387 24.6857 0.546387 21.8571C0.546387 20.1857 2.47262 18.7714 5.52248 17.7429L6.48559 18.9C4.8804 19.5429 3.75677 20.3143 3.75677 21.2143C3.75677 23.0143 8.09079 24.4286 13.3879 24.4286C18.685 24.4286 23.0191 23.0143 23.0191 21.2143C23.0191 20.3143 21.8954 19.5429 20.1297 18.9L21.0928 17.7429C24.3032 18.7714 26.2294 20.1857 26.2294 21.8571Z"
                    fill="white"
                  />
                </svg>
                ฉันอยู่ตรงนี้
              </button>
            </div>

            <div className="flex justify-end mr-14 md:mr-10 mx-auto">
              <button className="btn bg-accent hover:bg-accent-focus mt-8 w-52">
                บันทึก
              </button>
            </div>
          </div>
        </div>
        <Map latitude={coordinate.lat} longitude={coordinate.long} />
      </div>
    </div>
  );
};

export default Address;
