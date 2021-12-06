import React from "react";
import "../styles/global.css";
import "../styles/slider.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import { Link } from "gatsby";

function Projects() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div>
      <h2
        data-aos="fade-down"
        className="text-center font-semibold text-4xl mt-40"
      >
        <span className="text-prim-orange">MY</span> PROJECTS
      </h2>
      <h2 className="text-5xl font-bold absolute opacity-25 ml-4 mt-14 lg:text-7xl ">
        PROJECTS
      </h2>
      <div data-aos="fade-right">
        <ScrollContainer className="carousel">
          <Link draggable="false" to="/Provsti">
            <div className="carouselItem case1">
              <div className="w-64 text-center py-12 prim-purple drop-shadow">
                <h2>Næstved Provsti</h2>
              </div>
            </div>
          </Link>
          <Link draggable="false" to="/Gaston">
            <div className="carouselItem case2">
              <div className="w-64 text-center py-12 prim-purple drop-shadow">
                <h2>Gaston Media</h2>
              </div>
            </div>
          </Link>
          <Link draggable="false" to="/Nordvest">
            <div className="carouselItem case3">
              <div className="w-64 text-center py-12 prim-purple drop-shadow">
                <h2>Nordvest Ølbar</h2>
              </div>
            </div>
          </Link>
          <Link draggable="false" to="/Genskab">
            <div className="carouselItem case4">
              <div className="w-64 text-center py-12 prim-purple drop-shadow">
                <h2>Genskab</h2>
              </div>
            </div>
          </Link>
        </ScrollContainer>
      </div>
    </div>
  );
}

export default Projects;
