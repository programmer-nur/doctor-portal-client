import React from "react";
import contact from '../../assets/images/appointment.png'
const ContactUs = () => {
  return (
    <section className="my-16 py-16" 
    style={{background:`url(${contact})`}}>
      <div className="text-center">
        <p className="text-primary font-semibold">Contact Us</p>
        <h1 className="text-3xl text-white mb-5">Stay connected with us</h1>
      </div>
      <div className="text-center">
        <form>
        <input type="email" placeholder="Email Address" className="input input-bordered w-full my-5 max-w-xs" /><br />
        <input type="text" placeholder="Subject" className="input input-bordered w-full mb-5 max-w-xs" /><br />
        <textarea className="textarea textarea-bordered w-full mb-5 max-w-xs" placeholder="Your Message"></textarea><br />
        <input type="submit" className="btn btn-primary text-white" value="Submit" />
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
