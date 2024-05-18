import React from 'react';

import { Logo, hero, benefitsBar } from "../../data";
import Nav from "../Nav/Nav";


const Header = () => {
  return (
    <>
      <div className="header__top h-6 text-white text-xs flex items-center justify-center bg-lighterBlack">{benefitsBar.title}</div>

      <div className="header__main"> <a href="/"><img src={Logo} alt="Logo Maeztra" /></a></div>
      <div className="header__bottom"><Nav /></div>

    </>

  )
}

export default Header