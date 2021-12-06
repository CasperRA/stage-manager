import React from "react";
import "../styles/global.css";
import "../styles/slider.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Email from "../images/email.svg";
import Phone from "../images/phone.svg";

function Contact() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div>
      <h2
        data-aos="fade-down"
        className="text-center font-semibold text-4xl mt-12"
      >
        CONTACT<span className="text-prim-orange"> ME</span>
      </h2>
      <h2 className="text-5xl font-bold absolute opacity-25 ml-4 mt-8 lg:text-7xl ">
        CONTACT
      </h2>
      <div className="w-full flex flex-col justify-center align-center items-center text-center mt-12">
        <h3 data-aos="fade-down" className="w-full text-2xl font-bold">
          Found me interesting? Contact me at the following
        </h3>
        <div
          data-aos="fade-right"
          className="w-full text-prim-orange font-bold flex flex-col justify-center align-center items-center text-center mt-8"
        >
          <img className="w-24" src={Email} alt="Email" />{" "}
          <a
            href="mailto:CReedtz1@gmail.com"
            target="_blank"
            className="text-xl font-bold"
          >
            CReedtz1@gmail.com
          </a>
        </div>
        <div
          data-aos="fade-left"
          className="w-full text-prim-orange font-bold flex flex-col justify-center align-center items-center text-center mt-8"
        >
          <img className="w-24" src={Phone} alt="Phone" />{" "}
          <a href="tel:+4527512422" className="text-xl font-bold">
            27512422
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
