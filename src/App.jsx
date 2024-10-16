import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './bootstrap.min.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import ScrollToTop from './components/scrollToTop/ScrollToTop';
import AppProvider from './context/AppProvider';
import PageNotFound from './pages/404/PageNotFound';
import AddProduct from './pages/admin/addProduct/AddProduct';
import ProductManagement from './pages/admin/productManagement/ProductManagement';
import Contact from './pages/contact/Contact';
import DetailTour from './pages/details/DetailTour';
import HomePage from './pages/homePage/HomePage';
import RentCar from './pages/rentCar/RentCar';
import ToursTravel from './pages/toursTravel/ToursTravel';
import Hotels from './pages/hotels/Hotels';

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/tours-travel' element={<ToursTravel />} />
          <Route path='/rent-car' element={<RentCar />} />
          <Route path='/hotel' element={<Hotels />} />
          <Route path='/detail/:uuid' element={<DetailTour />} />
          <Route path='/contact' element={<Contact />} />
          <Route
            path='/admin/update-product/:productId'
            element={<AddProduct />}
          />
          <Route path='/admin/add-product' element={<AddProduct />} />
          <Route path='/admin' element={<ProductManagement />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        <Footer />
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
