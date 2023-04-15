import React from 'react';

const product = {
  apple: {
    price: 10,
    name: 'apple',
  },
  milk: {
    price: 15,
    name: 'milk',
  },
  beer: {
    price: 20,
    name: 'beer',
  },
};

const Product = ({ buyProduct }) => {
  return (
    <>
      <div>
        <h2>apple</h2>
        <button onClick={() => buyProduct(product.apple, 1)}>
          buy apple: {product.apple.price} uah
        </button>
      </div>
      <div>
        <h2>milk</h2>
        <button onClick={() => buyProduct(product.milk, 1)}>
          buy milk: {product.milk.price} uah
        </button>
      </div>
      <div>
        <h2>beer</h2>
        <button onClick={() => buyProduct(product.beer, 1)}>
          buy beer: {product.beer.price} uah
        </button>
      </div>
    </>
  );
};

export default Product;
