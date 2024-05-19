import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Banner from '../../assets/banner/banner.png';
import BannerMobile from '../../assets/banner/banner-mobile.png';
import Autoplay from 'embla-carousel-autoplay';
import Button from '../Button/Button';
import { bannerText } from '../../data';
import './global.css';

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <section>
      <div className="banner-container absolute z-10 left-[40%] lg:left-[30%] transform translate-x-[-40%] translate-y-[45%] lg:max-w-[471px]">
        <div className="banner-text flex flex-col gap-5 lg:gap-10">
          <h1 className="text-3xl font-montserrat font-bold text-white-default lg:text-4xl">
            {bannerText.title}
          </h1>
          <p className="text-sm font-normal mb-4 lg:mb-10 font-montserrat text-white-default lg:text-xl">
            {bannerText.subtitle}
          </p>
        </div>
        <a href="#" class="inline-block">
          <Button
            text={'Conferir'}
            className="px-4 py-2 font-montserrat text-white-default font-bold"
          />
        </a>
      </div>
      <div className="embla relative" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <img className="hidden lg:block" src={Banner} />
            <img className="block w-full  lg:hidden" src={BannerMobile} />
          </div>
          <div className="embla__slide">
            <img className="hidden lg:block" src={Banner} />
            <img className="block w-full  lg:hidden" src={BannerMobile} />
          </div>
          <div className="embla__slide">
            <img className="hidden lg:block" src={Banner} />
            <img className="block w-full lg:hidden" src={BannerMobile} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default EmblaCarousel;
