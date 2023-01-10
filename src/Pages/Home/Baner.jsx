import React from "react";
import { Link } from "react-router-dom";
import chair from "../../assets/images/chair.png";
import PrimaryButton from "../../compont/PrimaryButton/PrimaryButton";
const Baner = () => {
  return (
    <div className="hero md:px-5 md:my-20">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} alt="" className="w-full lg:w-1/2 rounded-lg shadow-2xl" />
        <div className="w-full lg:w-1/2 md:pl-12">
          <h1 className="text-5xl pt-2 font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
          <Link className="xs:flex flex-none items-center justify-center" to="/login"><PrimaryButton>Get Started</PrimaryButton></Link>
        </div>
      </div>
    </div>
  );
};
export default Baner;
