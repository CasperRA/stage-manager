import React from "react";
import "../styles/global.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import FrontP from "../images/gastonFront.png";
import Heart from "../images/gastonPeople.png";
import Podcast from "../images/gastonCases.png";
import { Link } from "gatsby";
import Logo from "../images/gastonLogo.png";

function ProvstiProject() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div>
      <h1
        data-aos="fade-down"
        className="text-4xl font-bold text-center pt-24 text-prim-gaston lg:text-6xl lg:text-left lg:pl-8"
      >
        Gaston Media
      </h1>
      <div className="w-full flex flex-col lg:flex-row">
        <div className=" text-center lg:text-left lg:px-8 lg:w-1/3">
          <h2
            data-aos="fade-right"
            className="text-xl font-semibold pt-2 lg:pt-4 "
          >
            Creating our own media agency.
          </h2>
          <p
            data-aos="fade-right"
            className="pt-6 px-8 lg:px-0 lg:pt-8 lg:w-full"
          >
            Gaston Media was where we got to work with multiple customers at a
            time, just like a real media agency. For this we created a small
            website to display our work, we've made during this project. <br />{" "}
            <br /> Our scope with this project was to seem reliable, modern and
            introduce us to new dependancies. We got to share different
            knowledge across the board, with developers and designers alike.
          </p>
          <div className="mt-4" data-aos="fade-right">
            <a className="underline" href="https://gastonmedia.netlify.app/">
              Link to Gaston Media website
            </a>
          </div>
          <div data-aos="fade-up" className="pt-8 flex justify-center">
            <img className="w-2/3" src={Logo} alt="" />
          </div>
        </div>
        <div className="flex flex-col mt-8 lg:px-8 lg:w-2/3">
          <div class="lg:flex lg:justify-end">
            <img
              data-aos="fade-left"
              className="mt-8 lg:w-2/3"
              src={FrontP}
              alt="FrontP"
            />
          </div>
          <div>
            <img
              data-aos="fade-left"
              className="mt-8 lg:w-2/3"
              src={Heart}
              alt="Heart"
            />
          </div>
          <div class="lg:flex lg:justify-end">
            <img
              data-aos="fade-left"
              className="mt-8 lg:w-2/3"
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
