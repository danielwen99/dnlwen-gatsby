/* eslint-disable react/prop-types */

import React, { useContext } from "react";
import { Link } from "gatsby";
import scrollTo from "gatsby-plugin-smoothscroll";
import { AppContext } from "~context/AppContext";

const Header = () => {
  const { menuActive, setMenuActive } = useContext(AppContext);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header
      className={`header ${
        menuActive ? ` menu-active` : ``
      } transition-transform w-full fixed top-0 right-0 left-0 z-30 py-2 animation-delay-4 animation-appear-slow`}
    >
      <nav className="grid text-white">
        <div className="grid-end-12 flex items-end justify-between">
          <button
            onClick={() => scrollTo(`#top`)}
            type="button"
            className="block"
          >
            <h2 className="f4 ">
              DNLWEN
              <span
                className="desktop-only"
                role="img"
                aria-label="peace and love"
              >
                ✌️+❤️
              </span>
            </h2>
          </button>

          <div className="flex">
            <button
              onClick={() => scrollTo(`#about`)}
              type="button"
              className="block"
            >
              <h2 className="b1 uppercase">/about</h2>
            </button>

            <button
              onClick={() => scrollTo(`#projects`)}
              type="button"
              className="block ml-5"
            >
              <h2 className="b1 uppercase">/projects</h2>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
