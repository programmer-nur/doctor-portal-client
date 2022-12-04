import React from "react";
import { Link } from "react-router-dom";
import chair from "../../assets/images/chair.png";
import PrimaryButton from "../../compont/PrimaryButton/PrimaryButton";
const Baner = () => {
  return (
    <div className="hero px-5 my-20">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} alt="" className="w-1/2 rounded-lg shadow-2xl" />
        <div className="w-1/2 pl-12">
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
          <Link to="/login"><PrimaryButton>Get Started</PrimaryButton></Link>
        </div>
      </div>
    </div>
  );
};
export default Baner;
