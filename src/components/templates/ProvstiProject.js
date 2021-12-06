import React from "react";
import "../styles/global.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import FrontP from "../images/provstiFP.png";
import Heart from "../images/provstiHeart.png";
import Podcast from "../images/provstiPodcast.png";
import Logo from "../images/provstiWhiteLogo.png";
import { Link } from "gatsby";

function ProvstiProject() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div>
      <h1
        data-aos="fade-down"
        className="text-4xl font-bold text-center pt-24 text-prim-provsti lg:text-6xl lg:text-left lg:pl-8"
      >
        Næstved Provsti
      </h1>
      <div className="w-full flex flex-col lg:flex-row">
        <div className=" text-center lg:text-left lg:px-8 lg:w-1/3">
          <h2
            data-aos="fade-right"
            className="text-xl font-semibold pt-2 lg:pt-4 "
          >
            Digitization of a church
          </h2>
          <p
            data-aos="fade-right"
            className="pt-6 px-8 lg:px-0 lg:pt-8 lg:w-full"
          >
            When working on digitizing Næstved Provsti, we had a target audience
            of teenagers to young adults. Therefore to meet the expectation of
            the young, we wanted to create a modern website and new image for
            the church. <br /> <br /> On the following pictures you can see some
            of the designs me and my team created.
          </p>
          <div className="mt-4" data-aos="fade-right">
            <a
              className="underline"
              href="https://naestved-provsti.netlify.app/"
            >
              Link to Næstved Provsti website
            </a>
          </div>
          <div data-aos="fade-up" className="py-8 flex justify-center">
            <img className="w-1/2" src={Logo} alt="" />
          </div>
        </div>
        <div className="flex flex-col lg:px-8 lg:w-2/3">
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
