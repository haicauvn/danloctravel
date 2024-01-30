import React, { useContext } from 'react';
import Hotel from '../../components/product/Hotel';

import { AppContext } from '../../context/AppProvider';

const Hotels = () => {
  const { hotelData } = useContext(AppContext);

  return (
    <div class='container-xxl py-5'>
      <div class='container'>
        <div class='text-center wow fadeInUp' data-wow-delay='0.1s'>
          <h6 class='section-title bg-white text-center text-primary px-3'>
            Hotel
          </h6>
          <h1 class='mb-5'>Khách sạn</h1>
        </div>
        <div class='row g-4'>
          {hotelData.map((product) => (
            <Hotel key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hotels;
