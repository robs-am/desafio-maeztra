import React from 'react';
import Slider from "react-slick";
import { shelf, Produto01, Produto02, Cor01, Cor02 } from "../../data";


export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true, // Defina as setas como true
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          arrows: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="slider-container px-8">
      <Slider {...settings}>
        {shelf.products.map(product => (
          <div className="shelf__product" key={product.id}>
            <img src={product.id === 1 ? Produto01 : Produto02} alt={product.name} />
            <img src={product.cor === './assets/shelf/cor01.png' ? Cor01 : Cor02} alt={product.name} />
            <span className="shelf__product-price">{product.price}</span>
            <h3 className="shelf__product-title">{product.name}</h3>
            <p className="shelf__product-desc">{product.desc}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};
