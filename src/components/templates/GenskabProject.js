import React from "react";
import "../styles/global.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import FrontP from "../images/genskabFront.png";
import Heart from "../images/genskabScan2.png";
import Podcast from "../images/genskabScan3.png";
import Logo from "../images/genskabLogo.png";
import { Link } from "gatsby";

function ProvstiProject() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div>
      <h1
        data-aos="fade-down"
        className="text-4xl font-bold text-center pt-24 text-prim-genskab lg:text-6xl lg:text-left lg:pl-8"
      >
        Genskab
      </h1>
      <div className="w-full flex flex-col lg:flex-row">
        <div className=" text-center lg:text-left lg:px-4 lg:w-1/3 xl:px-8">
          <h2
            data-aos="fade-right"
            className="text-xl font-semibold pt-2 px-4 lg:pt-4 lg:px-0 "
          >
            Making an app that scans and tracks your groceries
          </h2>
          <p
            data-aos="fade-right"
            className="pt-6 px-8 lg:px-0 lg:pt-8 lg:w-full"
          >
            Genskab was a proof of concept. <br /> <br /> I wanted to make an
            app that could scan your groceries and store them in firebase. I
            made a simple design as a part if the project and even made it
            filter items out. <br /> <br /> In the end it was a successful
            project, that helped me grow some of my pure js knowledge, that
            certainly will be usefull for later work.
          </p>
          <div data-aos="fade-up" className="py-8 flex justify-center">
            <img className="w-1/2" src={Logo} alt="" />
          </div>
        </div>
        <div className="flex flex-col lg:px-0 lg:w-2/3 lg:flex-row lg:justify-evenly">
          <div className="flex justify-center lg:justify-end">
            <img
              data-aos="fade-left"
              className="mt-8 max-h-screen w-3/4 lg:w-full lg:max-h-96 2xl:max-h-screen"
              src={FrontP}
              alt="FrontP"
            />
          </div>
          <div className="flex justify-center lg:justify-start">
            <img
              data-aos="fade-left"
              className="mt-8 max-h-screen w-3/4 lg:w-full lg:max-h-96 2xl:max-h-screen"
              src={Heart}
              alt="Heart"
            />
          </div>
          <div className="flex justify-center lg:justify-end">
            <img
              data-aos="fade-left"
              className="mt-8 max-h-screen w-3/4 lg:w-full lg:max-h-96 2xl:max-h-screen"
              src={Podcast}
              alt="Podcast"
            />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mt-24">
        <Link
          className="px-12 py-2 rounded-full custom-border border-4 font-bold text-xl sec-purple transform hover:scale-125 hover:text-prim-orange duration-100"
          href="/"
        >
          HOME
        </Link>
      </div>
    </div>
  );
}

export default ProvstiProject;
