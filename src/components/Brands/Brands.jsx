import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import './global.css';

import B01 from '../../assets/brands/brand01.png';
import B02 from '../../assets/brands/brand02.png';
import B03 from '../../assets/brands/brand03.png';
import B04 from '../../assets/brands/brand04.png';
import B05 from '../../assets/brands/brand05.png';

export function Brands() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, []);

  return (
    <section>
      <div className="brands__title mb-6">
        <h3 className="text-center font-bold text-2xl lg:text-3xl text-lighterBlack  leading-6">
          Marcas Parceiras
        </h3>
      </div>
      <div className="brands" ref={emblaRef}>
        <div className="brands__container">
          <div className="brands__slide">
            <img src={B03} />
          </div>
          <div className="brands__slide">
            <img src={B04} />
          </div>
          <div className="brands__slide">
            <img src={B05} />
          </div>
          <div className="brands__slide">
            <img src={B01} />
          </div>
          <div className="tipbar__slide">
            <img src={B02} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Brands;
