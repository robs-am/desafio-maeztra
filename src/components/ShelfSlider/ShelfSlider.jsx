import Slider from 'react-slick';
import Button from '../Button/Button';
import './global.css';
import { shelf, Produto01, Produto02, Cor01, Cor02 } from '../../data';

export default function SimpleSlider() {
  const settings = {
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container my-0 mx-auto">
      <div className="brands__title mb-6">
        <h3 className="text-center font-bold text-2xl lg:text-3xl text-lighterBlack leading-6">
          As Mais Pedidas
        </h3>
      </div>
      <Slider {...settings}>
        {shelf.products.map((product) => (
          <div className="shelf__product max-w-[300px] pb-3" key={product.id}>
            <a href="#">
              <img
                className="shelf__product--img"
                src={product.id === 1 ? Produto01 : Produto02}
                alt={product.name}
              />

              <img
                className="py-2 pl-5"
                src={product.cor === './assets/shelf/cor01.png' ? Cor01 : Cor02}
                alt={product.name}
              />
            </a>
            <div className="shelf__product--details pl-5">
              <span className="shelf__product-price pb-2 font-bold text-xl text-lighterBlack">
                {product.price}
              </span>
              <h3 className="shelf__product-title pb-2 text-base text-black">
                {product.name}
              </h3>
              <p className="shelf__product-desc text-xs text-[#0000007a] max-w-[240px] pb-2">
                {product.desc}
              </p>

              <Button
                text={'Adicionar'}
                className="w-[254px] py-2 text-base text-white-default rounded-md"
              />
            </div>
          </div>
        ))}
      </Slider>
      <div style={{ textAlign: 'center' }}>
        <button className="slick-arrow slick-prev">Previous</button>
        <button className="slick-arrow slick-next">Next</button>
      </div>
    </div>
  );
}
