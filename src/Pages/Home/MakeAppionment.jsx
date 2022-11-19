import React from "react";
import doctor from '../../assets/images/doctor.png'
import appoinment from '../../assets/images/appointment.png'
import PrimaryButton from "../../compont/PrimaryButton/PrimaryButton";
const MakeAppionment = () => {
  return (
    <section className="mt-32"
    style={{background:`url(${appoinment})`,}}
    >
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={doctor}
            className="w-1/2 lg:block hidden md:block -mt-36 rounded-lg "
            alt="/"
          />
          <div className="pr-14">
            <p className="text-lg text-primary font-semibold">Appointment</p>
            <h1 className="text-4xl py-5 text-white font-bold">Make an appointment Today</h1>
            <p className="py-6 text-white">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
            </p>
            <PrimaryButton>Appointment</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppionment;
