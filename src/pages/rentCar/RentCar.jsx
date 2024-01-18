import React, { useMemo } from 'react';
import Products from '../../components/products/Products';
import useFirestore from '../../hooks/useFirestore';

const RentCar = () => {
  const conditionProduct = useMemo(
    () => ({
      fieldName: 'typeProduct',
      operator: '==',
      compareValue: 'rent-car',
    }),
    []
  );
  const carData = useFirestore('product', conditionProduct);

  return (
    <Products data={carData} typeProduct={'Rent car'} title='Xe du lịch' />
  );
};

export default RentCar;
