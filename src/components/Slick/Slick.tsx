import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
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
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
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
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src="https://via.placeholder.com/400" alt="placeholder" />
        </div>
        <div>
          <img src="https://via.placeholder.com/400" alt="placeholder" />
        </div>
        <div>
          <img src="https://via.placeholder.com/400" alt="placeholder" />
        </div>
        <div>
          <img src="https://via.placeholder.com/400" alt="placeholder" />
        </div>
        <div>
          <img src="https://via.placeholder.com/400" alt="placeholder" />
        </div>
        <div>
          <img src="https://via.placeholder.com/400" alt="placeholder" />
        </div>

      </Slider >
    </div>
  );
}