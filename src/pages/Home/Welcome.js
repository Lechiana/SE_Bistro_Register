import React from "react";

const Welcome = () => {
  return (
    <div className="container mx-auto my-32">
      <div className="grid md:grid-cols-2 grid-cols-1">
        <img src="/images/welcome-bg-1.png" alt="" />
        <div className="my-auto md:pl-20 px-6 py-12 md:pl-20 text-center">
          <h1>ยินดีต้อนรับ</h1>
          <h1 className="text-secondary mb-12">สู่ร้านอาหารออนไลน์</h1>
          <p className="text-center">
            เมนูใหม่ อาหารอร่อย รสชาติดีที่เต็มไปด้วยบรรยากาศธรรมชาติ
            ให้ความรู้สึกถึงความฝันสุดแสนวิเศษจนไม่อยากตื่น ในช่วงเวลาที่มีค่า
            กับสุดยอดของเหล่าอาหารย่อมเป็นสิ่งที่คุ้มค่า
            สวรรค์แห่งอาหารต้องที่นี่ Bistro เท่านั้น เชิญเพลิดเพลินได้เลย
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
