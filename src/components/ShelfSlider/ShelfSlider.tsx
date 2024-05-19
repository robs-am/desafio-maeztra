import React from 'react';
import Slider from "react-slick";
import Next from "../../assets/banner/next.svg";
import Previous from "../../assets/banner/prev.svg";
import "./global.css"

import { shelf, Produto01, Produto02, Cor01, Cor02 } from "../../data";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="slick-next"
      style={{ ...style, display: 'flex', cursor: "pointer" }}
      onClick={onClick}
    >
      <img src={Next} alt="arrow_right" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="slick-prev"
      style={{ ...style, display: 'flex', cursor: "pointer" }}
      onClick={onClick}
    >
      <img src={Previous} alt="arrow_left" />
    </div>
  );
}


export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
