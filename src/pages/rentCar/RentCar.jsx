import React, { useContext } from 'react';
import Products from '../../components/products/Products';
import { AppContext } from '../../context/AppProvider';

const RentCar = () => {
  const { carData } = useContext(AppContext);

  return (
    <Products data={carData} typeProduct={'Rent car'} title='Xe du lịch' />
  );
};

export default RentCar;
