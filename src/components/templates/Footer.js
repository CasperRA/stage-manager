import React from "react";
import "../styles/global.css";
import "../styles/slider.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Github from "../images/github.png";
import LinkedIn from "../images/linkedin.png";
import Email from "../images/email.svg";

function Footer() {
  return (
    <div className="w-full mt-20  flex flex-col justify-between text-center lg:pl-8 lg:flex-row-reverse sec-purple items-center align-center">
      <div className="w-full pt-8 pb-4 flex justify-evenly lg:pt-4 lg:w-2/5 2xl:w-1/5">
        <a href="https://github.com/CasperRA">
          <img className="w-10" src={Github} alt="Github" />
        </a>
        <a href="https://www.linkedin.com/in/casper-reedtz-andersen-1618091b3/">
          <img className="w-10" src={LinkedIn} alt="LinkedIn" />
        </a>
        <a href="mailto:CReedtz1@gmail.com" target="CReedtz1@gmail.com">
          <img className="w-10" src={Email} alt="Email" />
        </a>
      </div>
      <div className="font-bold text-xl pt-4 pb-4">
        <p>@Copyright - Casper Reedtz Andersen</p>
      </div>
    </div>
  );
}

export default Footer;
