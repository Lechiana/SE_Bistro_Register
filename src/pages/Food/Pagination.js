import React from "react";

const Pagination = () => {
  return (
    <div className="my-16 container mx-auto">
      <div className=" grid justify-items-center">
        <div className="btn-group flex">
          <button className="btn">ก่อนหน้า</button>
          <input
            type="radio"
            name="options"
            data-title={1}
            className="btn"
            defaultChecked="checked"
          />
          <input type="radio" name="options" data-title={2} className="btn" />
          <input type="radio" name="options" data-title={3} className="btn" />
          <input type="radio" name="options" data-title={4} className="btn" />
          <button className="btn">ต่อไป</button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
