import React from "react";
import Orderconfirm from "./Orderconfirm";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
const index = () => {
  const Order = () => {
    return [...new Array(3)].map((el, index) => (
      <Orderconfirm
        key={index}
        image={"/images/menu-img-1.png"}
        name={"สลัดผักรวมมิตร"}
        type={"ปกติ"}
        price={100}
        amount={4}
      />
    ));
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <div class="text-sm breadcrumbs mt-5 ml-6">
          <ul>
            <li>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="w-4 h-4 mr-2 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                  ></path>
                </svg>
                หน้าแรก
              </a>
            </li>
            <li>
              <a>ตะกร้าสินค้า</a>
            </li>
            <li>ยืนยันการสั่งซื้อ</li>
          </ul>
        </div>
        <div className="text-center mt-5">
          <h1>ยืนยันการสั่งซื้อ</h1>
        </div>
        <div className="bg-base-200 p-8 mt-5 my-5  max-w-4xl mx-auto rounded-box">
          <div className="grid grid-cols-4 gap-4">
            <div className="col-start-2 hidden flex md:inline-flex">
              <h2>สินค้า</h2>
            </div>
            <div className="col-start-3 hidden flex md:inline-flex">
              <h2>จำนวน</h2>
            </div>
            <div className="col-start-4 hidden flex md:inline-flex">
              <h2>ราคา</h2>
            </div>
          </div>

          {Order()}

          <div className="grid grid-cols-4 mt-5">
            <div className="col-start-1 col-span-2">
              <a className="link link-hover text-base flex flex-row md:ml-5">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 24H2V20H22V24ZM13.06 5.19L16.81 8.94L7.75 18H4V14.25L13.06 5.19V5.19ZM17.88 7.87L14.13 4.12L15.96 2.29C16.0525 2.1973 16.1624 2.12375 16.2834 2.07357C16.4043 2.02339 16.534 1.99756 16.665 1.99756C16.796 1.99756 16.9257 2.02339 17.0466 2.07357C17.1676 2.12375 17.2775 2.1973 17.37 2.29L19.71 4.63C20.1 5.02 20.1 5.65 19.71 6.04L17.88 7.87Z"
                    fill="#7D7373"
                  />
                </svg>
                แก้ไขตะกร้าสินค้า
              </a>
            </div>
            <div className="col-start-3 ml-2">
              <h5>ราคารวม</h5>
            </div>
            <div className="col-start-4 text-error ml-3">
              <h3>฿ 1200</h3>
            </div>
          </div>
          <div>
            <hr className="mt-6"></hr>
            <h2 className="mt-6 text-center">ที่อยู่</h2>
            <a className="link link-hover flex flex-row text-base justify-end md:mr-5">
              เพิ่มที่อยู่
              <svg
                width="24"
                height="24"
                viewBox="0 0 28 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.0002 15.5001H16.3335V12.9167H18.6668V15.5001H21.0002V18.0834H18.6668V20.6667H16.3335V18.0834H14.0002V15.5001ZM25.6668 10.3334V23.2501C25.6668 24.6838 24.6285 25.8334 23.3335 25.8334H4.66683C3.37183 25.8334 2.3335 24.6838 2.3335 23.2501V7.75008C2.3335 6.31633 3.37183 5.16675 4.66683 5.16675H11.6668L14.0002 7.75008H23.3335C24.6285 7.75008 25.6668 8.89966 25.6668 10.3334ZM23.3335 10.3334H4.66683V23.2501H23.3335V10.3334Z"
                  fill="white"
                />
              </svg>
            </a>
            <div className="grid grid-cols-4 mt-5">
              <div className="col-start-1 text-center">
                <input type="radio" name="radio-1" className="radio" checked />
              </div>
              <div className="col-start-2">
                <h5>ที่บ้าน</h5>
              </div>
              <div className="col-start-4 mx-auto">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 17V20H10V18.11H3.9V17C3.9 16.36 7.03 14.9 10 14.9C10.96 14.91 11.91 15.04 12.83 15.28L14.35 13.76C12.95 13.29 11.5 13.03 10 13C7.33 13 2 14.33 2 17ZM10 4C7.79 4 6 5.79 6 8C6 10.21 7.79 12 10 12C12.21 12 14 10.21 14 8C14 5.79 12.21 4 10 4ZM10 10C8.9 10 8 9.11 8 8C8 6.89 8.9 6 10 6C11.1 6 12 6.9 12 8C12 9.1 11.11 10 10 10ZM21.7 13.35L20.7 14.35L18.65 12.35L19.65 11.35C19.7528 11.2492 19.891 11.1928 20.035 11.1928C20.179 11.1928 20.3172 11.2492 20.42 11.35L21.7 12.63C21.91 12.84 21.91 13.19 21.7 13.4V13.35ZM12 18.94L18.06 12.88L20.11 14.88L14.11 20.95H12V18.94Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="col-start-2 col-span-2">
                <h5>18/1 ม.9 ต.หนองสองห้อง อ.บ้านแพ้ว จ.สมุทรสาคร 74120</h5>
              </div>
            </div>
            <div className="grid grid-cols-4 mt-5">
              <div className="col-start-1 text-center">
                <input type="radio" name="radio-1" className="radio" checked />
              </div>
              <div className="col-start-2">
                <h5>ที่หอ</h5>
              </div>
              <div className="col-start-4 mx-auto">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 17V20H10V18.11H3.9V17C3.9 16.36 7.03 14.9 10 14.9C10.96 14.91 11.91 15.04 12.83 15.28L14.35 13.76C12.95 13.29 11.5 13.03 10 13C7.33 13 2 14.33 2 17ZM10 4C7.79 4 6 5.79 6 8C6 10.21 7.79 12 10 12C12.21 12 14 10.21 14 8C14 5.79 12.21 4 10 4ZM10 10C8.9 10 8 9.11 8 8C8 6.89 8.9 6 10 6C11.1 6 12 6.9 12 8C12 9.1 11.11 10 10 10ZM21.7 13.35L20.7 14.35L18.65 12.35L19.65 11.35C19.7528 11.2492 19.891 11.1928 20.035 11.1928C20.179 11.1928 20.3172 11.2492 20.42 11.35L21.7 12.63C21.91 12.84 21.91 13.19 21.7 13.4V13.35ZM12 18.94L18.06 12.88L20.11 14.88L14.11 20.95H12V18.94Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="col-start-2 col-span-2">
                <h5>
                  หอพักภิรมย์การ์เด้น 188 ม.3 ต.วังตะกู อ.เมือง จ.นครปฐม 73000
                </h5>
              </div>
            </div>
          </div>
          <div>
            <hr className="mt-6"></hr>
            <h2 className="mt-6 text-center">ชำระเงิน</h2>
          </div>
          <div class="flex flex-col md:flex-row mt-5">
            <div class="grid flex-grow card h-64 bg-base-100 md:w-2/4 rounded-box place-items-center grid-cols-3 py-5">
              <h6>เงินสด</h6>
              <img className="mr-auto" src="/images/$.png" />
              <input type="radio" name="radio" className="radio" checked />
              <h6>ครีปโต</h6>
              <img className="mr-auto" src="/images/B-1.png" />
              <input
                type="radio"
                name="radio"
                className="radio radio-primary"
                checked
              />
              <h6>บัตรเครดิต</h6>
              <img className="mr-auto" src="/images/card1.png" />
              <input
                type="radio"
                name="radio"
                className="radio radio-secondary"
                checked
              />
            </div>
            <div className="divider lg:divider-horizontal"> </div>
            <div className="grid flex-grow card h-64 md:w-2/4 bg-base-100 rounded-box place-items-center">
              <img src="/images/ww1.png" />
              <input
                type="text"
                placeholder="รหัสคูปอง"
                className="input input-bordered input-info w-full max-w-xs"
              />
            </div>
          </div>
          <div>
            <hr className="mt-6"></hr>
            <div className="grid md:grid-cols-4 gap-2 mt-5 grid-cols-2">
              <button className="btn btn-base-300 hover:bg-base-300 md:col-start-3 col-span-1">
                ยกเลิกการสั่งซื้อ
              </button>
              <button className="btn btn-primary md:col-start-4 col-span-1">
                ยืนยันการสั่งซื้อ
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default index;
