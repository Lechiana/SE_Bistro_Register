import React from "react";

const Review = ({ name, review }) => {
  return (
    <React.Fragment>
      <div className="px-4">
        <div className="bg-neutral rounded-2xl px-4 py-4 ">
          <p>{review}</p>
          <h2 className="text-primary mt-4">{name}</h2>
        </div>
        <div className="avatar my-10">
          <div className="mb-8 rounded-full w-24 h-24 ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="http://daisyui.com/tailwind-css-component-profile-1@94w.png" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Review;
