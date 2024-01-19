import React, { useContext } from 'react';
import Products from '../../components/products/Products';
import { AppContext } from '../../context/AppProvider';
import AboutUs from './components/aboutUs/AboutUs';
import Services from './components/services/Services';
import './style.css';

const HomePage = () => {
  const { toursData } = useContext(AppContext);

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
