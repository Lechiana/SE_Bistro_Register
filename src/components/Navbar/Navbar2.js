import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar2 = () => {
  return (
    <div className="">
      <div className="navbar shadow-lg bg-neutral text-neutral-content fixed z-50 px-5 py-2 w-full top-0 xl:hidden flex">
        <div className="container mx-auto">
          <div className="flex-1">
            <div className="w-16 h-16">
              <Link to="#">
                <img src="https://media.discordapp.net/attachments/589087498949361665/942442211155517450/logo-4.png?width=676&height=676" />
              </Link>
            </div>
          </div>
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
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 card card-compact w-64 dropdown-content bg-base-100 shadow"
            >
              <div className="card-body">
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="ค้นหา"
                    className="input input-bordered"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <i className="fa-solid fa-bars" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-5 p-2 shadow-lg bg-neutral rounded-box w-80"
              >
                <li>
                  <Link to="#" className="justify-between">
                    หน้าหลัก
                  </Link>
                </li>
                <li>
                  <Link to="#">เมนู</Link>
                </li>
                <li>
                  <Link to="#">โปรไฟล์</Link>
                </li>
                <li>
                  <Link to="#">ดูตะกร้า</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
