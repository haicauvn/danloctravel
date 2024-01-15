import React from 'react';
import AboutUs from './components/aboutUs/AboutUs';
import Services from './components/services/Services';
import Tours from './components/tours/Tours';
import './style.css';

const HomePage = () => {
  return (
    <div>
      <AboutUs />
      <Services />
      <Tours />
    </div>
  );
};

export default HomePage;
