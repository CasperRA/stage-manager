import React from "react";
import "../styles/global.css";
import "../styles/burgermenu.css";
import "aos/dist/aos.css";
import { slide as Menu } from "react-burger-menu";
import { Link } from "gatsby";

function Navigation() {
  return (
    <Menu right id="menu-container">
      <Link id="home" className="menu-item" href="/">
        Home
      </Link>
      <div className="no-hover pt-16 pb-2 text-prim-white">
        <h2 className="text-3xl no-hover text-left pl-4">Projects</h2>
        <div className="w-full h-1 mt-1 background-blue"></div>
      </div>
      <Link className="menu-item text-4xl" href="/Provsti">
        Næstved Provsti
      </Link>
      <Link className="menu-item text-4xl" href="/Gaston">
        Gaston Media
      </Link>
      <Link className="menu-item text-4xl" href="/Nordvest">
        Nordvest Ølbar
      </Link>
      <Link className="menu-item text-4xl" href="/Genskab">
        Genskab
      </Link>
    </Menu>
  );
}

export default Navigation;
