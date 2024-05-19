import React from 'react'

import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Banner from '../../assets/banner/banner.png';
import Autoplay from 'embla-carousel-autoplay';


export function TipBar() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <img src={Banner} />
        </div>
        <div className="embla__slide">
          <img src={Banner} />
        </div>
        <div className="embla__slide">
          <img src={Banner} />
        </div>
      </div>
    </div>
  );
}

export default TipBar
