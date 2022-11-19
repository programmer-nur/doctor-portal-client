import React from "react";

const Review = ({ rev }) => {
  const { name, img, review, location } = rev;
  return (
    <div className="card w-96 bg-base-100 shadow-2xl">
      <div className="card-body">
        <p>{review}</p>
        <div className="flex items-center mt-6">
          <div className="avatar mr-6">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img alt="" src={img} />
            </div>
          </div>
          <div>
            <h2>{name}</h2>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
