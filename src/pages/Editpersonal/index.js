import React from "react";
import "./style.css";

const Editpersonal = () => {
  return (
    <div className="container mx-auto">
      <div className="bg-base-200 p-8 mt-8 my-5 max-w-5xl mx-auto rounded-box">
        <div className="text-center">
          <h2 className="mt-4">แก้ไขข้อมูลส่วนตัว</h2>
          <hr className="mt-6"></hr>
        </div>
        <div class="grid grid-flow-rows gap-2 md:grid-col-3 md:grid-flow-col">
          <div className="col-span-3 md:col-span-2 md:row-span-5 mt-5 mx-auto">
            <img
              src="/images/profile.png"
              className="mask mask-hexagon-2"
              alt=".."
            />
            <div className="btn bg-secondary-focus hover:bg-secondary w-3/4 md:ml-5 ml-6">
              <input type="file" id="file" name="file" accept="image/*" />
              <label for="file">เพิ่มรูปโปรไฟล์</label>
            </div>
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
                <li>แก้ไขข้อมูลส่วนตัว</li>
              </ul>
            </div>
          </div>
          <div class="col-span-3 md:col-span-3 ml-1 md:ml-5">
            <div className="text-left">
              <hr className="mt-3"></hr>
            </div>
            <div className="grid grid-cols-2">
              <h3 className="mt-4">แก้ไขข้อมูลส่วนตัว</h3>
            </div>
            <div className="grid grid-cols-3 grid-flow-col mt-2">
              <div className="col-span-1 mt-4">
                <h6>ชื่อจริง</h6>
              </div>
              <div className="col-span-2">
                <div className="form-control w-8/12">
                  <input
                    type="text"
                    placeholder="จิรายุส"
                    className="input input-bordered"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 grid-flow-col mt-2">
              <div className="col-span-1 mt-4">
                <h6>นามสกุล</h6>
              </div>
              <div className="col-span-2">
                <div className="form-control w-8/12">
                  <input
                    type="text"
                    placeholder="สหพรอุดมการ"
                    className="input input-bordered"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 grid-flow-col mt-2">
              <div className="col-span-1 mt-4">
                <h6>อีเมล</h6>
              </div>
              <div className="col-span-2 mt-4">
                <h6>624259007@webmail.npru.ac.th</h6>
              </div>
            </div>
            <div className="grid grid-cols-3 grid-flow-col mt-5">
              <div className="col-span-1 mt-4">
                <h6>เบอร์โทรศัพท์</h6>
              </div>
              <div className="col-span-2">
                <div className="form-control w-8/12">
                  <input
                    type="text"
                    placeholder="094-9627105"
                    className="input input-bordered"
                  />
                </div>
              </div>
            </div>
            <div className="text-center">
              <hr className="mt-6"></hr>
            </div>
            <div className="flex justify-end mr-14 md:mr-10 mx-auto">
              <button className="btn bg-accent hover:bg-accent-focus mt-8 w-52">
                บันทึก
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editpersonal;
