import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="p-10 footer bg-base-200 text-base-content footer-center ">
        <div className="grid md:grid-cols-3 grid-cols-1">
          <div>
            <h2>ติดต่อเรา</h2>
            <div className="my-8 grid grid-cols-1 gap-2 content-center">
              <div className="flex">
                <i className="fa-solid fa-location-dot" />
                <p className="mx-2">Location</p>
              </div>
              <div className="flex">
                <i className="fa-solid fa-phone" />
                <p className="mx-2">Call +01 1234567890</p>
              </div>
              <div className="flex">
                <i className="fa-solid fa-paper-plane" />
                <p className="mx-2">foodOnline@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="mb:mb-5 mb-5">
            <div className="mb:my-5">
              <div className="avatar">
                <div className=" rounded-full w-32 h-32">
                  <img src="https://media.discordapp.net/attachments/589087498949361665/942442211155517450/logo-4.png?width=676&height=676" />
                </div>
              </div>
              <p>
                Necessary, making this the first true generator <br></br>
                on the Internet. It uses a dictionary of over <br></br>
                200 Latin words, combined with
              </p>
              <div className="mt-6">
                <div>
                  <i className="fa-brands fa-facebook text-2xl mx-2" />
                  <i className="fa-brands fa-twitter-square text-2xl mx-2" />
                  <i className="fa-brands fa-linkedin-in text-2xl mx-2" />
                  <i className="fa-brands fa-instagram text-2xl mx-2" />
                  <i className="fa-brands fa-pinterest text-2xl mx-2" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2>เวลาทำการโดยปกติ</h2>
            <div className="my-8">
              <p className="my-5">วันจันทร์ - วันเสาร์</p>
              <p>09.00 น. - 16.00 น.</p>
            </div>
          </div>
        </div>
        <div>
          <p>© 2022 All Rights Reserved By Food Online SE NPRU</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
