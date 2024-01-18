import React, { useMemo } from 'react';
import useFirestore from '../../hooks/useFirestore';
import Products from '../../components/products/Products';

const ToursTravel = () => {
  const conditionProduct = useMemo(
    () => ({
      fieldName: 'typeProduct',
      operator: '==',
      compareValue: 'tour-travel',
    }),
    []
  );
  const toursData = useFirestore('product', conditionProduct);

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
