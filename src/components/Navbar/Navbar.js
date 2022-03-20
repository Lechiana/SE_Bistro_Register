import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="">
      <div className="navbar shadow-lg bg-neutral text-neutral-content fixed z-50 w-full top-0 hidden  xl:flex">
        <div className="container mx-auto">
          <div className="flex-1">
            <div className="flex gap-5">
              <div className="w-16 h-16">
                <Link to="/">
                  <img src="https://media.discordapp.net/attachments/589087498949361665/942442211155517450/logo-4.png?width=676&height=676" />
                </Link>
              </div>
              <div className="flex-none flex">
                <div className="navbar ">
                  <Link to="/" className="btn btn-ghost normal-case text-base">
                    หน้าหลัก
                  </Link>
                </div>
                <div className="navbar ">
                  <Link to="/" className="btn btn-ghost normal-case text-base">
                    เมนู
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-none mx-2">
            <div className="form-control">
              <input
                type="text"
                placeholder="ค้นหา"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="flex gap-2 mt-2">
            <button className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">8</span>
                </div>
              </label>
              <div
                tabIndex={0}
                className="mt-3 card card-compact w-52 dropdown-content bg-base-100 shadow"
              >
                <div className="card-body">
                  <span className="font-bold text-lg">8 รายการ</span>
                  <span className="text-info">ราคารวม: 999 บาท</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">
                      ดูตะกร้า
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-none">
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 h-10 rounded-full">
                    <img src="https://api.lorem.space/image/face?hash=33791" />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-36"
                >
                  <li>
                    <Link to="/" className="justify-between">
                      โปรไฟล์
                    </Link>
                  </li>
                  <li>
                    <Link to="/">ลงชื่อออก</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
