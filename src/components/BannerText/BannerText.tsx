//@ts-nocheck
import React from 'react';

import { bannerWithText, BannerTextMob, BannerTextDesk } from '../../data';

const BannerText = () => {
  return (
    <section>
      <div className="banner-with_text__content flex flex-col mb-10 gap-6 px-8 lg:flex lg:flex-row lg:justify-center lg:gap-16">
        <div className="banner-with_text__info flex flex-col gap-4 max-w-[270px] lg:max-w-[420px] lg:justify-center">
          <h1 className="text-black text-2xl font-bold">
            {bannerWithText.title}
          </h1>
          <p className="text-sm font-normal">{bannerWithText.desc}</p>
        </div>
        <div className="banner-with_text__img">
          <a href="#">
            {' '}
            <img
              src={BannerTextMob}
              alt="Imagem Mobile"
              className="lg:hidden w-full"
            />
          </a>

          <a href="#">
            {' '}
            <img
              src={BannerTextDesk}
              alt="Imagem Desktop"
              className="hidden lg:block lg:w-full"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BannerText;
