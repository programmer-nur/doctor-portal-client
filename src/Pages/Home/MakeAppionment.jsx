import React from "react";
import doctor from '../../assets/images/doctor.png'
import appoinment from '../../assets/images/appointment.png'
import PrimaryButton from "../../compont/PrimaryButton/PrimaryButton";
import { Link } from "react-router-dom";
const MakeAppionment = () => {
  return (
    <section className="mt-24 text-center p-5 md:p-0"
    style={{background:`url(${appoinment})`,}}
    >
      <div className="hero px-5">
        <div className="hero-content p-0 flex-col py-12 lg:py-0 lg:flex-row">
          <img
            src={doctor}
            className="w-1/2 pt-0 lg:block hidden md:block -mt-36 rounded-lg "
            alt="/"
          />
          <div>
            <p className="text-lg text-primary font-semibold">Appointment</p>
            <h1 className="text-2xl md:text-4xl py-5 text-white font-bold">Make an appointment Today</h1>
            <p className="py-6 text-white">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
            </p>
            <Link to='/appointment'><PrimaryButton>Appointment</PrimaryButton></Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppionment;
