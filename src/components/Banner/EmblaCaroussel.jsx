import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Banner from '../../assets/banner/banner.png';
import BannerMobile from '../../assets/banner/banner-mobile.png';
import Autoplay from 'embla-carousel-autoplay';
import './global.css';

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <div className="embla" ref={emblaRef}>
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
  );
}

export default EmblaCarousel;
