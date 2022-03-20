import React from "react";

const Banner = () => {
  return (
    <div className="bg-neutral p-12 my-40">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-5 grid-cols-1 gap-5">
          <div className="col-span-1 md:col-span-3 md:px-20 pb-8 md:pb-0 my-auto">
            <h1 className="text-center mb-5 ">ร้านอาหารออนไลน์</h1>
            <p className="text-center">
              เมนูใหม่ อาหารอร่อย รสชาติดีที่เต็มไปด้วยบรรยากาศธรรมชาติ
              ให้ความรู้สึกถึงความฝันสุดแสนวิเศษจนไม่อยากตื่น ในช่วงเวลาที่มีค่า
              กับสุดยอดของเหล่าอาหารย่อมเป็นสิ่งที่คุ้มค่า
              สวรรค์แห่งอาหารต้องที่นี่ Bistro เท่านั้น เชิญเพลิดเพลินได้เลย
            </p>
            <div className="text-center mb-5 ">
              <button class="btn btn-secondary my-9">เมนูทั้งหมด</button>
            </div>
          </div>
          <div className="md:col-span-2 col-span-1">
            <img src="/images/about-img-1.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
