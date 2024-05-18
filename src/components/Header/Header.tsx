import React from 'react';

import { Logo, benefitsBar, colRight } from "../../data";
import Nav from "../Nav/Nav";
import Search from "../Search/Search";

const Header = () => {
  return (
    <>
      <header>
        <div className="header__top h-6 text-white text-xs flex items-center justify-center bg-lighterBlack">
          {benefitsBar.title}
        </div>

        <div className="header__main flex flex-row items-center justify-around p-6">
          <div className="header__main--col-left">
            <a href="/"><img src={Logo} alt="Logo Maeztra" /></a>
          </div>
          <div className="header__main--col-center">
            <Search />
          </div>
          <div className="header__main--col-right flex flex-row">
            {/* Mapping over colRight array to render each item */}
            {colRight.map((item, index) => (
              <div key={index} className="header__icon">
                <a href="#">
                  <img src={item.icon} alt={` ${item.name}`} />

                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="header__bottom flex justify-center">
          <Nav />
        </div>
      </header>
    </>
  );
};

export default Header;
