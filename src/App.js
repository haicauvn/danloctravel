import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import PageNotFound from './pages/404/PageNotFound';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import DetailTour from './pages/details/DetailTour';
import HomePage from './pages/homePage/HomePage';
import ToursTravel from './pages/toursTravel/ToursTravel';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/tours-travel' element={<ToursTravel />} />
        <Route path='/tours-travel/:id' element={<DetailTour />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
