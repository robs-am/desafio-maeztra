import React from 'react';

import { Logo, benefitsBar, colRight, Heart, User, ShoppingBag } from "../../data";
import Nav from "../Nav/Nav";
import Search from "../Search/Search";
import { BiMenu } from 'react-icons/bi';
import { CiSearch } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";



const Header = () => {
  return (
    <>
      <div className="benefits__bar h-6 text-white-100 text-xs flex items-center justify-center bg-lighterBlack">
        {benefitsBar.title}
      </div>

      {/* Header Mobile */}
      <header className="header__mobile h-28 flex items-center justify-center lg:hidden">
        <div className="header__mobile--container flex flex-row items-center gap-5 px-4">
          <div clasName="hamburguer"><BiMenu size={36} /></div>
          <div className="header__mobile-logo mr-16">
            <a href="/"><img src={Logo} alt="Logo Maeztra" /></a>
          </div>
          <div className="icons__mobile flex flex-row items-center gap-8">
            <div clasName="search"><CiSearch size={32} /></div>
            <div clasName="shoppingBag"><HiOutlineShoppingBag size={32} /></div>
          </div>
        </div>
      </header>

      {/* Header Desktop */}

      <header className="header__desktop hidden lg:block">
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
                <span className="text-sm">Minha Conta</span>
              </a>
            </div>
            <div className="favoritos">
              <a className="flex flex-row gap-2" href="#">
                <img src={Heart} />
                <span className="text-sm">Favoritos</span>
              </a>
            </div>
            <div className="favoritos">
              <a className="flex flex-row gap-2" href="#">
                <img src={ShoppingBag} />
                <span className="text-sm">Meu Carrinho</span>
              </a>
            </div>
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
