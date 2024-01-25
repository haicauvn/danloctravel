import React from 'react';
import Product from '../product/Product';

const Products = ({ data, numberProduct, typeProduct, title }) => {
  return (
    <>
      {data && (
        <div class='container-xxl py-5'>
          <div class='container'>
            <div class='text-center wow fadeInUp' data-wow-delay='0.1s'>
              <h6 class='section-title bg-white text-center text-primary px-3'>
                {typeProduct}
              </h6>
              <h1 class='mb-5'>{title}</h1>
            </div>
            <div class='row g-4'>
              {data.slice(0, numberProduct).map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Products;
