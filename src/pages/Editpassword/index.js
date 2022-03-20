import React, { useState } from "react";

const Editpassword = () => {
  const [pwd, setPwd] = useState("");
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  const [pwd1, setPwd1] = useState("");
  const [isRevealPwd1, setIsRevealPwd1] = useState(false);
  const [pwd2, setPwd2] = useState("");
  const [isRevealPwd2, setIsRevealPwd2] = useState(false);
  return (
    <React.Fragment>
      <div className="container mx-auto">
        <div className="bg-base-200 p-8 mt-8 my-5 max-w-5xl mx-auto rounded-box">
          <div className="text-center">
            <h2 className="mt-4">รหัสผ่าน</h2>
            <hr className="mt-6"></hr>
          </div>
          <div class="grid grid-flow-rows gap-2 md:grid-col-3 md:grid-flow-col ">
            <div className="col-span-3 md:col-span-2 md:row-span-5 mt-5 mx-auto">
              <img src="/images/profile.png" alt=".." />
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
                  <li>แก้ไขรหัสผ่าน</li>
                </ul>
              </div>
            </div>
            <div class="col-span-3 md:col-span-3 ml-1 md:ml-5">
              <div className="text-left">
                <hr className="mt-3"></hr>
              </div>
              <div className="grid grid-cols-2">
                <h3 className="mt-4 mx-auto md:ml-2">แก้ไขรหัสผ่าน</h3>
              </div>
              <div className="form-control md:w-2/4 w-3/4 grid justify-items-stretch mt-4 mx-auto md:ml-2">
                <label className="label">
                  <span className="label-text fas fa-unlock-alt">
                    {" "}
                    รหัสผ่านเก่า
                  </span>
                </label>
                <input
                  className="input input-bordered"
                  name="pwd"
                  placeholder="รหัสผ่านเก่า"
                  type={isRevealPwd ? "text" : "password"}
                  value={pwd}
                  onChange={(e) => setPwd(e.target.value)}
                />
                <div
                  className="absolute mt-8 justify-self-end mr-4"
                  onClick={() => setIsRevealPwd((prevState) => !prevState)}
                >
                  {isRevealPwd ? (
                    <i className="fas fa-eye text-sm" />
                  ) : (
                    <i className="fas fa-eye-slash text-sm" />
                  )}
                </div>
              </div>
              <div className="form-control md:w-2/4 w-3/4 grid justify-items-stretch mt-4 mx-auto md:ml-2">
                <label className="label">
                  <span className="label-text fas fa-unlock-alt">
                    {" "}
                    รหัสผ่านใหม่
                  </span>
                </label>
                <input
                  className="input input-bordered"
                  name="pwd1"
                  placeholder="รหัสผ่านใหม่"
                  type={isRevealPwd1 ? "text" : "password"}
                  value={pwd1}
                  onChange={(e) => setPwd1(e.target.value)}
                />
                <div
                  className="absolute mt-8 justify-self-end mr-4"
                  onClick={() => setIsRevealPwd1((prevState) => !prevState)}
                >
                  {isRevealPwd1 ? (
                    <i className="fas fa-eye text-sm" />
                  ) : (
                    <i className="fas fa-eye-slash text-sm" />
                  )}
                </div>
              </div>
              <div className="form-control md:w-2/4 w-3/4 grid justify-items-stretch mt-4 mx-auto md:ml-2">
                <label className="label">
                  <span className="label-text fas fa-unlock-alt">
                    {" "}
                    ยืนยันรหัสผ่านใหม่
                  </span>
                </label>
                <input
                  className="input input-bordered"
                  name="pwd2"
                  placeholder="ยืนยันรหัสผ่านใหม่"
                  type={isRevealPwd2 ? "text" : "password"}
                  value={pwd2}
                  onChange={(e) => setPwd2(e.target.value)}
                />
                <div
                  className="absolute mt-8 justify-self-end mr-4"
                  onClick={() => setIsRevealPwd2((prevState) => !prevState)}
                >
                  {isRevealPwd2 ? (
                    <i className="fas fa-eye text-sm" />
                  ) : (
                    <i className="fas fa-eye-slash text-sm" />
                  )}
                </div>
              </div>
              <div className="text-center">
                <hr className="mt-6"></hr>
              </div>
              <div className="flex justify-end mr-14 md:mr-10">
                <button className="btn bg-accent hover:bg-accent-focus mt-8 w-52 ">
                  บันทึก
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Editpassword;
