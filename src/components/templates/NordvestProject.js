import React from "react";
import "../styles/global.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import FrontP from "../images/nvoeFP.png";
import Heart from "../images/nordvestEvent.png";
import Podcast from "../images/nordvestSort.png";
import Logo from "../images/nordvestLogo.png";
import Quiz from "../images/nordvestQuiz.png";
import { Link } from "gatsby";

function ProvstiProject() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div>
      <h1
        data-aos="fade-down"
        className="text-4xl font-bold text-center pt-24 text-prim-nordvest lg:text-6xl lg:text-left lg:pl-8"
      >
        Nordvest Ølbar
      </h1>
      <div className="w-full flex flex-col lg:flex-row">
        <div className=" text-center lg:text-left lg:px-8 lg:w-1/3">
          <h2
            data-aos="fade-right"
            className="text-xl font-semibold pt-2 lg:pt-4 "
          >
            Updating a bar with fresh taste.
          </h2>
          <p
            data-aos="fade-right"
            className="pt-6 px-8 lg:px-0 lg:pt-8 lg:w-full"
          >
            Nordvest Ølbar was my first real client I had to work with. We were
            tasked to update a bar owners website to make it more than just an
            informational website. <br /> <br /> As a team we were drawn to the
            atmosphere in the bar. That's why we decided to use a lot of
            pictures through out the whole website, to really get the atmosphere
            across to the users. <br /> Being a beer bar, we also decided on a
            moody/darkened theme to allow for more coziness and the old school
            feeling.
          </p>

          <div data-aos="fade-up" className="py-8 flex justify-around">
            <img className="w-1/3" src={Logo} alt="" />
            <img className="w-1/3" src={Quiz} alt="" />
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
