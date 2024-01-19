import { deleteDoc, doc } from 'firebase/firestore';
import React, { useContext } from 'react';
import { AppContext } from '../../../context/AppProvider';
import { db } from '../../../firebase/config';

import { useNavigate } from 'react-router-dom';
import './style.css';

const ProductManagement = () => {
  const { toursData } = useContext(AppContext);
  const navigate = useNavigate();

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
    <>
      <div class='product-status mg-b-30'>
        <div class='container-fluid'>
          <div class='row'>
            <div class='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
              <div class='product-status-wrap'>
                <h4>Danh sách sản phẩm</h4>
                <div
                  class='add-product-btn'
                  onClick={() => navigate('/admin/add-product')}
                >
                  <p>Thêm sản phẩm</p>
                </div>
                <table>
                  <tr>
                    <th>Image</th>
                    <th>Product Title</th>
                    <th>Time</th>
                    <th>Price</th>
                    <th>Setting</th>
                  </tr>
                  {toursData &&
                    toursData.map((item) => (
                      <tr>
                        <td>
                          <img
                            src={require(`../../../img/${item.nameImage}`)}
                            alt=''
                          />
                        </td>
                        <td>{item.title}</td>
                        <td>{item.time}</td>
                        <td>{item.price}</td>
                        <td>
                          <button
                            class='ps-setting'
                            data-toggle='tooltip'
                            title='Edit'
                            onClick={() =>
                              navigate(`/admin/update-product/${item.uuid}`)
                            }
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
