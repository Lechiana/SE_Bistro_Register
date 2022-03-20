import React from 'react';

const Hero = () => {
  return (
    <div
      className="hero lg:min-h-screen h-64 mt-20"
      style={{
        backgroundImage: 'url("/images/chopping-board.png")',
      }}
    >
      <div className=" bg-opacity-60" />
      <div className="text-center hero-content text-neutral-content">
        <div className="max-w-md">
          <p className="mb-2 font-medium text-lg">อาหารที่น่าสนใจที่สุดในโลก</p>
          <p className="mb-3 md:text-5xl text-3xl font-bold">ค้นพบรสชาติ <span className="text-secondary">อาหาร</span></p>
          <p className="md:text-5xl text-3xl font-bold"><span className="text-secondary">มากมาย</span> เหลือเกิน</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
