import React from "react";
import treatment from '../../assets/images/treatment.png'
const Extra = () => {
  return (
    <div className="card lg:card-side flex  shadow-xl">
      <div className="w-full lg:w-1/2">
        <img src={treatment} className="p-0 lg:py-20 lg:pl-[14rem] pr-4  md:h-[575px]" alt="Album" />
      </div>
      <div className="card-body w-full lg:w-1/2 my-auto lg:pr-[166px]">
        <h2 className="card-title text-5xl">Exceptional Dental Care, on Your Terms</h2>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
        <div className="card-actions">
          <button className="btn btn-primary text-white">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Extra;
