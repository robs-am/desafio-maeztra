import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Banner from '../../assets/banner/banner.png';
import Autoplay from 'embla-carousel-autoplay';
import './global.css';

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

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

export default EmblaCarousel;
