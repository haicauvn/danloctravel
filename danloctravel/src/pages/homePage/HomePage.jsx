import React from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import AboutUs from './components/aboutUs/AboutUs';
import Services from './components/services/Services';
import Tours from './components/tours/Tours';
import './style.css';

const HomePage = () => {
  return (
    <div>
      <Header namePage={'home'} title={'Enjoy Your Vacation With Us'} />
      <AboutUs />
      <Services />
      <Tours />
      <Footer />
    </div>
  );
};

export default HomePage;
