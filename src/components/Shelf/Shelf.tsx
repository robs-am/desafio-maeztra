import React from 'react'

import { shelf, Produto01, Produto02, Cor01, Cor02 } from "../../data"



const Shelf = () => {
  return (
    <section>
      <div className="shelf__content">
        <h2 className="shelf__title">{shelf.title}</h2>
        <div className="shelf__products">
          {shelf.products.map(product => (
            <div className="shelf__product" key={product.id}>
              <img src={product.id === 1 ? Produto01 : Produto02} alt={product.name} />
              <img src={product.cor === './assets/shelf/cor01.png' ? Cor01 : Cor02} alt={product.name} />
              <img src="https://via.placeholder.com/132x27" alt="SKU" />
              <span className="shelf__product-price">{product.price}</span>
              <h3 className="shelf__product-title">{product.name}</h3>
              <p className="shelf__product-desc">{product.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shelf;