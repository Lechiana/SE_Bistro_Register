import React from "react";

const NavContent = () => {
  return (
    <div className="my-5 container mx-auto">
      <div class="text-sm breadcrumbs mb-5 xl:px-0 px-2">
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
          <li>เมนูทั้งหมด</li>
        </ul>
      </div>
      <div className="grid xl:grid-cols-3 grid-cols-1">
        <div className="xl:px-0 px-2 xl:mt-5">
          <h2>เมนูทั้งหมด</h2>
          <div className="flex mt-2">
            <p className="mt-1">เรียงตาม :</p>
            <select className="select select-bordered select-sm max-w-xs ml-2 bg-neutral font-normal">
              <option disabled="" selected="">
                ชื่อสินค้า
              </option>
              <option>ใหม่ล่าสุด</option>
              <option>ยอดฮิต</option>
              <option>ราคาสูงสุด</option>
              <option>ราคาต่ำสุด</option>
            </select>
          </div>
        </div>
        <div className="flex xl:mt-5 my-5 xl:px-0 px-2">
          <div className="flex-1">
            <div className="form-control h-8 mt-2">
              <input
                type="text"
                placeholder="ค้นหา"
                className="input input-ghost bg-base-200 rounded-full"
              />
            </div>
          </div>
          <div className="flex-none">
            <button className="btn btn-square btn-ghost rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="">
          <div class="text-center xl:float-right">
            <a class="tab text-base font-normal text-secondary">อาหาร</a>
            <a class="tab text-base font-normal text-base-content">
              เครื่องดื่ม
            </a>
            <a class="tab text-base font-normal text-base-content">ขนมหวาน</a>
          </div>

          <div className="flex mt-2 xl:px-0 px-2 xl:float-right">
            <p className="mt-1 xl:text-right">ประเภทอาหาร :&nbsp;</p>
            <div className="flex mt-1">
              <div className="grid grid-cols-2 pl-2 xl:pl-1  xl:px-2 px-2">
                <input
                  type="checkbox"
                  name="radio-1"
                  className="radio radio-secondary "
                />
                <span className="label-text mt-1 xl:text-right">
                  &nbsp;เส้น
                </span>
              </div>
              <div className="flex mx-2">
                <input
                  type="checkbox"
                  name="radio-2"
                  className="radio radio-secondary"
                  checked
                />
                <span className="label-text mt-1 ">&nbsp;จานเดี่ยว</span>
              </div>
              <div className="flex ">
                <input
                  type="checkbox"
                  name="radio-3"
                  className="radio radio-secondary"
                />
                <span className="label-text mt-1">&nbsp;พิซซ่า</span>
              </div>
            </div>
          </div>

          <div className="flex mt-2 xl:px-0 px-2 xl:float-right">
            <div className="flex mt-1">
              <div className="grid grid-cols-2 xl:px-2">
                <input
                  type="checkbox"
                  name="radio-4"
                  className="radio radio-secondary "
                />
                <span className="label-text mt-1 xl:text-right">
                  &nbsp;เส้น
                </span>
              </div>
              <div className="grid grid-cols-2 xl:px-2 px-2 pl-2">
                <input
                  type="checkbox"
                  name="radio-5"
                  className="radio radio-secondary "
                />
                <span className="label-text mt-1 xl:text-right">
                  &nbsp;เส้น
                </span>
              </div>
              <div className="grid grid-cols-2 xl:px-2 px-2">
                <input
                  type="checkbox"
                  name="radio-6"
                  className="radio radio-secondary "
                />
                <span className="label-text mt-1 xl:text-right">
                  &nbsp;เส้น
                </span>
              </div>
              <div className="grid grid-cols-2 xl:px-2 px-2">
                <input
                  type="checkbox"
                  name="radio-7"
                  className="radio radio-secondary "
                />
                <span className="label-text mt-1 xl:text-right">
                  &nbsp;เส้น
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavContent;
