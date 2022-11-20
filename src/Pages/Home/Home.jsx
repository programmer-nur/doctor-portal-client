import React from "react";

import Baner from "./Baner";
import ContactUs from "./ContactUs";
import Extra from "./Extra";
import InfoCards from "./InfoCards";
import MakeAppionment from "./MakeAppionment";
import ServiceCards from "./ServiceCards";
import Testimonial from "./Testimonial";
const Home = () => {
  return (
    <div className="mx-5">
      <Baner />
      <InfoCards />
      <ServiceCards />
      <Extra />
      <MakeAppionment />
      <Testimonial />
      <ContactUs />
    </div>
  );
};

export default Home;
