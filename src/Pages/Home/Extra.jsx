import React from "react";
import { Link } from "react-router-dom";
import treatment from "../../assets/images/treatment.png";
const Extra = () => {
  return (
    <div className="card sm:flex-row py-6 md:py-16 md:mt-16 flex-col flex  shadow-xl">
      <div className="w-full relative md:w-1/2">
        <img
          src={treatment}
          className="lg:w-1/2 h-full p-6 lg:absolute right-12"
          alt="Album"
        />
      </div>
      <div className="card-body w-full md:w-1/2 my-auto lg:pr-[166px]">
        <h2 className="card-title text-5xl">
          Exceptional Dental Care, on Your Terms
        </h2>
        <p className="py-6">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <div className="card-actions">
          <Link to="/login">
            {" "}
            <button className="btn btn-primary text-white">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Extra;
