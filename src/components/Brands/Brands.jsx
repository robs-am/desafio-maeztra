import React from 'react';
import Slider from 'react-slick';

import './global.css';

import B01 from '../../assets/brands/brand01.png';
import B02 from '../../assets/brands/brand02.png';
import B03 from '../../assets/brands/brand03.png';
import B04 from '../../assets/brands/brand04.png';
import B05 from '../../assets/brands/brand05.png';

export function Brands() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerMode: true, // Adicionando centerMode aqui
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          centerMode: true,
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };
  return (
    <section>
      <div className="brands__title mb-6">
        <h3 className="text-center font-bold text-2xl lg:text-3xl text-lighterBlack  leading-6">
          Marcas Parceiras
        </h3>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          <div className="flex justify-center">
            <img src={B03} alt="Brand 3" />
          </div>
          <div className="flex justify-center">
            <img src={B04} alt="Brand 4" />
          </div>
          <div className="flex justify-center">
            <img src={B05} alt="Brand 5" />
          </div>
          <div className="flex justify-center">
            <img src={B01} alt="Brand 1" />
          </div>
          <div className="flex justify-center">
            <img src={B02} alt="Brand 2" />
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default Brands;
