import React from 'react';

import { Logo, hero, benefitsBar, colRight } from "../../data";
import Nav from "../Nav/Nav";



const Header = () => {
  return (
    <>
      <div className="header__top h-6 text-white text-xs flex items-center justify-center bg-lighterBlack">{benefitsBar.title}</div>

      <div className="header__main flex flex-row items-center justify-around p-6">
        <div className="header__main--col-left">
          <a href="/"><img src={Logo} alt="Logo Maeztra" /></a>
        </div>
        <div className="header__main--col-center">
          <form action class="search"><input type="text" placeholder="O Que Você Busca?"></input></form>
        </div>
        <div className="header__main--col-right flex flex-row">
          {colRight.map((item, index) => {
            return <li className="list-none" key={index}><a className="flex flex-row" href="#"><img src={item.image} />{item.name}</a></li>
          }
          )}
        </div>

        {/* <div className="header__bottom flex justify-center"><Nav />
      </div> */}

      </div >
    </>

  )
}

export default Header