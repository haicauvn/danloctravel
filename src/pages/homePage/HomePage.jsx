import React, { useMemo } from 'react';
import Products from '../../components/products/Products';
import useFirestore from '../../hooks/useFirestore';
import AboutUs from './components/aboutUs/AboutUs';
import Services from './components/services/Services';
import './style.css';

const HomePage = () => {
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
    <div>
      <AboutUs />
      <Services />
      <Products
        data={toursData}
        numberProduct={4}
        typeProduct={'Tours'}
        title='Tour du lịch mới nhất'
      />
    </div>
  );
};

export default HomePage;
