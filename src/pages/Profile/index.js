import React from "react";

const Profile = () => {
  return (
    <>
      <div className="container mx-auto mt-28">
        <div className="bg-base-200 p-8 mt-8 my-5 max-w-5xl mx-auto rounded-box">
          <div className="text-center">
            <h2 className="mt-4">ข้อมูลส่วนตัว</h2>
            <hr className="mt-6"></hr>
          </div>
          <div class="grid grid-flow-rows gap-2 md:grid-col-3 md:grid-flow-col ">
            <div className="col-span-3 md:col-span-2 md:row-span-5 mt-5 mx-auto">
              <img src="/images/profile.png" className="mask mask-hexagon-2" alt=".." />
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
                  <li>ข้อมูลส่วนตัว</li>
                </ul>
              </div>
            </div>
            <div class="col-span-3 md:col-span-3 ml-1 md:ml-5">
              <div className="text-left">
                <hr className="mt-3"></hr>
              </div>
              <div className="grid grid-cols-2">
                <h3 className="mt-4">ข้อมูลส่วนตัว</h3>
                <a href="/Editpersonal" className="btn bg-info hover:bg-primary-focus col-end-4 w-14">
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.5 17V20H10.5V18.11H4.4V17C4.4 16.36 7.53 14.9 10.5 14.9C11.46 14.91 12.41 15.04 13.33 15.28L14.85 13.76C13.45 13.29 12 13.03 10.5 13C7.83 13 2.5 14.33 2.5 17ZM10.5 4C8.29 4 6.5 5.79 6.5 8C6.5 10.21 8.29 12 10.5 12C12.71 12 14.5 10.21 14.5 8C14.5 5.79 12.71 4 10.5 4ZM10.5 10C9.4 10 8.5 9.11 8.5 8C8.5 6.89 9.4 6 10.5 6C11.6 6 12.5 6.9 12.5 8C12.5 9.1 11.61 10 10.5 10ZM22.2 13.35L21.2 14.35L19.15 12.35L20.15 11.35C20.2528 11.2492 20.391 11.1928 20.535 11.1928C20.679 11.1928 20.8172 11.2492 20.92 11.35L22.2 12.63C22.41 12.84 22.41 13.19 22.2 13.4V13.35ZM12.5 18.94L18.56 12.88L20.61 14.88L14.61 20.95H12.5V18.94"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
              <div className="grid grid-cols-3 grid-flow-col gap-1">
                <div className="col-span-1 mt-4">
                  <h6>ชื่อจริง</h6>
                </div>
                <div className="col-span-2 mt-4">
                  <h6>จิรายุส</h6>
                </div>
              </div>
              <div className="grid grid-cols-3 grid-flow-col gap-1">
                <div className="col-span-1 mt-4">
                  <h6>นามสกุล</h6>
                </div>
                <div className="col-span-2 mt-4">
                  <h6>สหพรอุดมการ</h6>
                </div>
              </div>
              <div className="grid grid-cols-3 grid-flow-col gap-1">
                <div className="col-span-1 mt-4">
                  <h6>อีเมล</h6>
                </div>
                <div className="col-span-2 mt-4">
                  <h6>624259007@webmail.npru.ac.th</h6>
                </div>
              </div>
              <div className="grid grid-cols-3 grid-flow-col gap-1">
                <div className="col-span-1 mt-4">
                  <h6>เบอร์โทรศัพท์</h6>
                </div>
                <div className="col-span-2 mt-4">
                  <h6>094-9627105</h6>
                </div>
              </div>
            </div>
            <div class="col-span-3 md:col-span-3 ml-1 md:ml-5">
              <div className="text-left">
                <hr className="mt-3"></hr>
              </div>
              <div className="grid grid-cols-2">
                <h3 className="mt-4">ที่อยู่</h3>
                <a href="/Address" className="btn bg-info hover:bg-primary-focus col-end-4 w-14">
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.5 12H14.5V10H16.5V12H18.5V14H16.5V16H14.5V14H12.5V12ZM22.5 8V18C22.5 19.11 21.61 20 20.5 20H4.5C3.39 20 2.5 19.11 2.5 18V6C2.5 4.89 3.39 4 4.5 4H10.5L12.5 6H20.5C21.61 6 22.5 6.89 22.5 8ZM20.5 8H4.5V18H20.5V8Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
              <div className="grid grid-cols-3 grid-flow-col gap-1 mt-5">
                <div className="col-span-1 mt-6">
                  <h6>ที่บ้าน</h6>
                </div>
                <div className="col-span-2 mt-4 w-3/4 ml-5">
                  <h6>18/1 ม.9 ต.หนองสองห้อง อ.บ้านแพ้ว จ.สมุทรสาคร 74120</h6>
                </div>
                <a href="/Editaddress" className="btn bg-base-100 hover:bg-primary-focus col-span-3 w-14">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 17V20H10V18.11H3.9V17C3.9 16.36 7.03 14.9 10 14.9C10.96 14.91 11.91 15.04 12.83 15.28L14.35 13.76C12.95 13.29 11.5 13.03 10 13C7.33 13 2 14.33 2 17ZM10 4C7.79 4 6 5.79 6 8C6 10.21 7.79 12 10 12C12.21 12 14 10.21 14 8C14 5.79 12.21 4 10 4ZM10 10C8.9 10 8 9.11 8 8C8 6.89 8.9 6 10 6C11.1 6 12 6.9 12 8C12 9.1 11.11 10 10 10ZM21.7 13.35L20.7 14.35L18.65 12.35L19.65 11.35C19.7528 11.2492 19.891 11.1928 20.035 11.1928C20.179 11.1928 20.3172 11.2492 20.42 11.35L21.7 12.63C21.91 12.84 21.91 13.19 21.7 13.4V13.35ZM12 18.94L18.06 12.88L20.11 14.88L14.11 20.95H12V18.94"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
              <div className="grid grid-cols-3 grid-flow-col gap-1">
                <div className="col-span-1 mt-4">
                  <h6>ที่ห้องพัก</h6>
                </div>
                <div className="col-span-2 mt-4 w-3/4 ml-5">
                  <h6>
                    หอพักภิรมย์การ์เด้น 188 ม.3 ต.วังตะกู อ.เมือง จ.นครปฐม 73000
                  </h6>
                </div>
                <button className="btn bg-base-100 hover:bg-primary-focus col-span-3 w-14">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 17V20H10V18.11H3.9V17C3.9 16.36 7.03 14.9 10 14.9C10.96 14.91 11.91 15.04 12.83 15.28L14.35 13.76C12.95 13.29 11.5 13.03 10 13C7.33 13 2 14.33 2 17ZM10 4C7.79 4 6 5.79 6 8C6 10.21 7.79 12 10 12C12.21 12 14 10.21 14 8C14 5.79 12.21 4 10 4ZM10 10C8.9 10 8 9.11 8 8C8 6.89 8.9 6 10 6C11.1 6 12 6.9 12 8C12 9.1 11.11 10 10 10ZM21.7 13.35L20.7 14.35L18.65 12.35L19.65 11.35C19.7528 11.2492 19.891 11.1928 20.035 11.1928C20.179 11.1928 20.3172 11.2492 20.42 11.35L21.7 12.63C21.91 12.84 21.91 13.19 21.7 13.4V13.35ZM12 18.94L18.06 12.88L20.11 14.88L14.11 20.95H12V18.94"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div class="col-span-3 md:col-span-3 ml-5">
              <div className="text-left">
                <hr className="mt-3"></hr>
              </div>
              <div className="mt-4">
                <h3>แก้ไขรหัสผ่าน</h3>
                <a href="/Editpassword" className="btn bg-info hover:bg-primary-focus w-14 mt-4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.5 17V20H10.5V18.11H4.4V17C4.4 16.36 7.53 14.9 10.5 14.9C11.46 14.91 12.41 15.04 13.33 15.28L14.85 13.76C13.45 13.29 12 13.03 10.5 13C7.83 13 2.5 14.33 2.5 17ZM10.5 4C8.29 4 6.5 5.79 6.5 8C6.5 10.21 8.29 12 10.5 12C12.71 12 14.5 10.21 14.5 8C14.5 5.79 12.71 4 10.5 4ZM10.5 10C9.4 10 8.5 9.11 8.5 8C8.5 6.89 9.4 6 10.5 6C11.6 6 12.5 6.9 12.5 8C12.5 9.1 11.61 10 10.5 10ZM22.2 13.35L21.2 14.35L19.15 12.35L20.15 11.35C20.2528 11.2492 20.391 11.1928 20.535 11.1928C20.679 11.1928 20.8172 11.2492 20.92 11.35L22.2 12.63C22.41 12.84 22.41 13.19 22.2 13.4V13.35ZM12.5 18.94L18.56 12.88L20.61 14.88L14.61 20.95H12.5V18.94Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div class="col-span-3 md:col-span-3 ml-5">
              <div className="text-left">
                <hr className="mt-3"></hr>
              </div>
              <div className="flex justify-end mt-4 mr-10">
                <button className="btn bg-secondary-focus hover:bg-secondary w-52">
                  ลบบัญชี
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
