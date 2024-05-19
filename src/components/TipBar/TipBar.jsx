import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import './global.css';

import T01 from '../../assets/tipbar/Tipbar01.png';
import T02 from '../../assets/tipbar/Tipbar02.png';
import T03 from '../../assets/tipbar/Tipbar03.png';
import T04 from '../../assets/tipbar/Tipbar04.png';
import T05 from '../../assets/tipbar/Tipbar05.png';

export function TipBar() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, []);

  return (
    <div className="tipbar" ref={emblaRef}>
      <div className="tipbar__container">
        <div className="tipbar__slide">
          <img src={T01} />
        </div>
        <div className="tipbar__slide">
          <img src={T02} />
        </div>
        <div className="tipbar__slide">
          <img src={T03} />
        </div>
        <div className="tipbar__slide">
          <img src={T04} />
        </div>
        <div className="tipbar__slide">
          <img src={T05} />
        </div>
      </div>
    </div>
  );
}

export default TipBar;
