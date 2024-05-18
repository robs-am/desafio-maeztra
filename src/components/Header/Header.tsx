import React from 'react';

import { Logo, benefitsBar, colRight, Heart, User, ShoppingBag } from "../../data";
import Nav from "../Nav/Nav";
import Search from "../Search/Search";


const Header = () => {
  return (
    <>
      <header>
        <div className="header__top h-6 text-white-100 text-xs flex items-center justify-center bg-lighterBlack">
          {benefitsBar.title}
        </div>

        <div className="header__main flex flex-row items-center justify-around p-6 bg-white shadow-md">
          <div className="header__main--col-left">
            <a href="/"><img src={Logo} alt="Logo Maeztra" /></a>
          </div>
          <div className="header__main--col-center">
            <div className="rounded-s-xl">
              <Search className="rounded-lg" />
            </div>
          </div>
          <div className="header__main--col-right flex flex-row gap-10">
            <div className="favoritos">
              <a className="flex flex-row gap-2" href="#">
                <img src={User} />
                <span>Minha Conta</span>
              </a>
            </div>
            <div className="favoritos">
              <a className="flex flex-row gap-2" href="#">
                <img src={Heart} />
                <span>Favoritos</span>
              </a>
            </div>
            <div className="favoritos">
              <a className="flex flex-row gap-2" href="#">
                <img src={ShoppingBag} />
                <span>Meu Carrinho</span>
              </a>
            </div>
          </div>
        </div>

        <div className="header__bottom flex justify-center">
          <Nav />
        </div>
      </header >
    </>
  );
};

export default Header;
