import React from 'react';
import Slider from 'react-slick';

import B01 from '../../assets/brands/brand01.png';
import B02 from '../../assets/brands/brand02.png';
import B03 from '../../assets/brands/brand03.png';
import B04 from '../../assets/brands/brand04.png';
import B05 from '../../assets/brands/brand05.png';
import './brands.css';

export function Brands() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          /*    centerMode: true, */
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          /*          centerMode: true, */
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          /*      centerMode: true, */
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };
  return (
    <section className="brands">
      <div className="brands__title mb-6">
        <h3 className="text-center font-bold text-2xl lg:text-3xl text-lighterBlack  leading-6">
          Marcas Parceiras
        </h3>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <img src={B03} alt="Brand 3" />
          </div>
          <div>
            <img src={B04} alt="Brand 4" />
          </div>
          <div>
            <img src={B05} alt="Brand 5" />
          </div>
          <div>
            <img src={B01} alt="Brand 1" />
          </div>
          <div>
            <img src={B02} alt="Brand 2" />
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default Brands;
