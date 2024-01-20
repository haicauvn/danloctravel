import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './bootstrap.min.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import PageNotFound from './pages/404/PageNotFound';
import AddProduct from './pages/admin/addProduct/AddProduct';
import ProductManagement from './pages/admin/productManagement/ProductManagement';
import Contact from './pages/contact/Contact';
import DetailTour from './pages/details/DetailTour';
import HomePage from './pages/homePage/HomePage';
import RentCar from './pages/rentCar/RentCar';
import ToursTravel from './pages/toursTravel/ToursTravel';
import AppProvider from './context/AppProvider';

function App() {
  return (
    <HashRouter>
      <AppProvider>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/tours-travel' element={<ToursTravel />} />
          <Route path='/rent-car' element={<RentCar />} />
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
    </HashRouter>
  );
}

export default App;
