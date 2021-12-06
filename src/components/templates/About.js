import React from "react";
import "../styles/global.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import pictureMe from "../images/aboutFace.jpg";

function About() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div className="overflow-hidden">
      <h2
        data-aos="fade-down"
        className="text-center font-semibold text-4xl mt-10"
      >
        ABOUT <span className="text-prim-orange">ME</span>
      </h2>
      <h2 className="text-5xl font-bold absolute opacity-25 ml-4 lg:text-7xl">
        ABOUT
      </h2>
      <div className="flex flex-col w-full lg:flex-row lg:mt-10 lg:px-4">
        <div
          data-aos="fade-right"
          className="w-full px-10 my-6 flex flex-col text-center md:my-10 md:px-20  lg:text-left lg:px-0 lg:w-1/3 lg:justify-center xl:px-6"
        >
          <h3 className="text-xl font-bold md:text-2xl 2xl:text-3xl">
            Striving towards learning new technology.
          </h3>
          <p className="mt-4 2xl:text-xl 2xl:mt-8">
            As a Multimediadesigner I've had a lot of different projects,
            requiring different skills. <br /> <br /> Through teamwork and
            dedication I've learnt to build complicated websites and be quick to
            adapt to new libraries, frameworks & packages. <br /> <br /> Being
            on top of new technology helps me grow with the industry and be able
            to take on new tasks, out of my comfort zone.
          </p>
        </div>
        <div
          data-aos="fade-down"
          className="flex w-full px-8 justify-center lg:items-center lg:w-10 lg:px-4"
        >
          <span className="w-full h-1 bg-prim-blue lg:w-1 lg:h-4/5 xl:h-full"></span>
        </div>
        <div
          data-aos="fade-up"
          className="my-6 px-10 flex flex-col text-center md:my-10 lg:px-0 lg:w-1/3 lg:justify-center"
        >
          <h3 className="text-xl font-bold md:text-2xl 2xl:text-3xl">
            My current technologies.
          </h3>
          <p className="mt-4 text-lg font-medium md:text-xl 2xl:text-xl 2xl:mt-8">
            HTML <br /> CSS <br /> JS <br /> SASS <br /> VueJS <br /> ReactJS
            <br /> Gatsby <br /> Bootstrap <br /> Bulma <br /> NPM <br />
            Tailwind <br /> Firebase
          </p>
        </div>
        <div
          data-aos="fade-down"
          className="flex w-full px-8 justify-center lg:items-center lg:w-10 lg:px-4"
        >
          <span className="w-full h-1 bg-prim-blue lg:w-1 lg:h-4/5 xl:h-full"></span>
        </div>
        <div
          data-aos="fade-left"
          className="my-6 px-10 flex justify-center md:my-10 lg:px-0 lg:w-1/3 lg:items-center xl:px-6"
        >
          <img
            className="md:w-3/5 lg:w-64 lg:h-64 xl:w-full xl:h-full 2xl:w-3/4"
            src={pictureMe}
            alt="picture of me"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
