import React from 'react';
import Card from '../../components/Card/Card';

const Section = ({ title, description }) => {
  const renderCard = () => {
    return [...new Array(4)].map((el, index) => (
      <Card
        key={index}
        name="ข้าวผัด"
        discountPrice={50}
        avgRating={4.3}
        countReviewer={50}
        image="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        type={'อาหาร'}
        category={['จานเดี่ยว', 'อาหารตามสั่ง']}
        price={150}
        // isDiscount={true}
        // isStock={false}
      />
    ));
  };

  return (
    <div className="container mx-auto mb-20 md:px-0 px-3.5">
      <h1 className="mb-4">
        เมนู<span className="text-secondary"> {title}</span>
      </h1>
      <p className="mb-8">{description}</p>
      <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-5 grid-cols-1">
        {renderCard()}
      </div>
    </div>
  );
};

export default Section;
