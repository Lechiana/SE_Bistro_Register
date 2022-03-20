import React from 'react';

const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: 'url("/images/banner-bg-1.png")',
      }}
    >
      <div className="hero-overlay bg-opacity-60" />
      <div className="text-center hero-content text-neutral-content">
        <div className="max-w-md">
          <p className="mb-2">อาหารที่น่าสนใจที่สุดในโลก</p>
          <h1 className="mb-3 text-5xl font-bold">ค้นพบ <span className="text-secondary">รสชาติ</span> ของ</h1>
          <h1 className=" text-5xl font-bold"><span className="text-secondary">อาหาร</span> ที่ Bistro</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
