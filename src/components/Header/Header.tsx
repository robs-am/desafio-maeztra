import React from 'react';

import { Logo, hero } from "../../data";

const Header = () => {
  return (
    <header>
      <div>
        <a href="/"><img src={Logo} alt="Logo Maeztra" /></a>
      </div>
      <ul>
        <li>{hero.title}</li>
        <li>Teste</li>
        <li>Teste</li>
        <li>Teste</li>
        <li>Teste</li>
      </ul>
    </header>
  )
}

export default Header