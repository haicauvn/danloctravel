import { deleteDoc, doc } from 'firebase/firestore';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../../context/AppProvider';
import { db } from '../../../firebase/config';
import useGetUrlImage from '../../../hooks/useGetUrlImage';
import './style.css';

const Product = ({ item }) => {
  const navigate = useNavigate();
  const urlImage = useGetUrlImage(item);

  // Delete product data in database
  const handleDelete = (product) => {
    const docRef = doc(db, 'products', `${product.id}`);
    deleteDoc(docRef)
      .then(() => {
        alert('Entire Document has been deleted successfully.');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <tbody>
      <tr>
        <td>
          <img
            style={{ maxHeight: '60px', maxWidth: '60px' }}
            src={urlImage}
            alt=''
          />
        </td>
        <td>{item.title}</td>
        <td>
          {item.price} <i>vnđ</i>
        </td>
        <td>
          <button
            class='ps-setting'
            data-toggle='tooltip'
            title='Edit'
            onClick={() => navigate(`/admin/update-product/${item.uuid}`)}
          >
            <i class='fas fa-edit fa-xs'></i>
          </button>
          <button
            data-toggle='tooltip'
            title='Delete'
            class='ds-setting'
            onClick={() => handleDelete(item)}
          >
            <i class='fa fa-trash fa-xs' aria-hidden='true'></i>
          </button>
        </td>
      </tr>
    </tbody>
  );
};

const ProductManagement = () => {
  const { toursData, carData, hotelData } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <>
      <div class='product-status mg-b-30'>
        <div class='container-fluid'>
          <div class='row'>
            <div class='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
              <div
                class='add-product-btn'
                onClick={() => navigate('/admin/add-product')}
              >
                <p>Thêm sản phẩm</p>
              </div>
              <div class='product-status-wrap'>
                <h4>Danh sách sản phẩm</h4>
                <table>
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Product Title</th>
                      <th>Price</th>
                      <th>Setting</th>
                    </tr>
                  </thead>
                  {toursData &&
                    toursData.map((item) => (
                      <Product key={item.uuid} item={item} />
                    ))}
                </table>
              </div>
              <div class='product-status-wrap mt-5'>
                <h4>Danh sách xe cho thuê</h4>
                <table>
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Product Title</th>
                      <th>Price</th>
                      <th>Setting</th>
                    </tr>
                  </thead>
                  {carData &&
                    carData.map((item) => (
                      <Product key={item.uuid} item={item} />
                    ))}
                </table>
              </div>
              <div class='product-status-wrap mt-5'>
                <h4>Danh sách khách sạn</h4>
                <table>
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Product Title</th>
                      <th>Price</th>
                      <th>Setting</th>
                    </tr>
                  </thead>
                  {hotelData &&
                    hotelData.map((item) => (
                      <Product key={item.uuid} item={item} />
                    ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductManagement;
