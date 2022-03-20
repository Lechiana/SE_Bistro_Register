import React from "react";

const Card = ({
  name,
  discountPrice,
  avgRating,
  countReviewer,
  image,
  type,
  category,
  price,
  isDiscount = false,
  isStock = true,
}) => {
  return (
    <div>
      <div className="card card-bordered drop-shadow-lg">
        {isDiscount ? (
          <div className="badge mx-2 badge-secondary  h-6 absolute top-0 right-0">
            {`${100 - ((discountPrice * 100) / price).toPrecision(2)}%`}
          </div>
        ) : (
          ""
        )}
        <figure>
          <img src={image} />
        </figure>
        <div className="card-body p-7">
          <h2 className="card-title">{name}</h2>
          <div className="mb-3 flex">
            <div className="rating rating-sm mt-1">
              {[...new Array(Math.floor(avgRating))].map(() => (
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-warning"
                />
              ))}
              {[...new Array(5 - Math.floor(avgRating))].map(() => (
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2"
                />
              ))}
            </div>
            <p className="ml-1.5 mt-0.5">({countReviewer})</p>
          </div>
          <div className="flex">
            <p>ประเภทอาหาร :</p>
            <p>&nbsp;{type}</p>
          </div>
          <div className="flex">
            <p className="my-2">หมวดหมู่อาหาร :</p>
            {category.map((el) => (
              <p className="my-2">&nbsp;{el}</p>
            ))}
          </div>
          <div className="flex">
            {isDiscount ? (
              <React.Fragment>
                <h1 className="text-error">฿50</h1>
                <h3 className="my-4 ml-2 ">
                  <strike>150</strike>
                </h3>
              </React.Fragment>
            ) : (
              <h2 className="my-2">฿50</h2>
            )}
          </div>
          <div className="justify-end card-actions pb-4">
            {isStock ? (
              <button className="btn btn-primary">ใส่ตะกร้า</button>
            ) : (
              <button className="btn btn-outline">หมด</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
