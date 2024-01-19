import React, { useContext } from 'react';
import Products from '../../components/products/Products';
import { AppContext } from '../../context/AppProvider';

const ToursTravel = () => {
  const { toursData } = useContext(AppContext);

  return (
    <>
      <Products
        data={toursData}
        typeProduct={'Tours'}
        title='Tour du lịch Đà Nẵng'
      />
      <Products
        data={toursData}
        typeProduct={'Tours'}
        title='Tour du lịch Huế'
      />
    </>
  );
};

export default ToursTravel;
