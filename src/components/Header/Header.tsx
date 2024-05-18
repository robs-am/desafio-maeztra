import React from 'react';

import { Logo, hero } from "../../data";
import Nav from "../Nav/Nav";

const Header = () => {
  return (
    <header>
      <div>
        <a href="/"><img src={Logo} alt="Logo Maeztra" /></a>
      </div>
      <Nav />

    </header>
  )
}

export default Header