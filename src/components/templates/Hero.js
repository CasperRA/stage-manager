import React from "react";
import "../styles/global.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Navigation from "../components/Navigation";
import Logo from "../images/selflogo.png";

function Hero() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div className="h-screen">
      <Navigation />
      <div className="bgHero w-full h-screen absolute z-0" />
      <div className="w-full h-screen flex flex-col items-center justify-center absolute z-10">
        <img
          data-aos="fade-down"
          className="w-3/5 lg:w-1/5"
          src={Logo}
          alt=""
        />
        <h1
          data-aos="fade-right"
          className="text-prim-orange text-4xl mt-8 text-center font-bold lg:text-6xl"
        >
          Casper Reedtz <br /> Andersen
        </h1>
      </div>
    </div>
  );
}

export default Hero;
