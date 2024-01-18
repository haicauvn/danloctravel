import React from 'react';
import './style.css';

const ProductList = () => {
  return (
    <>
      <div class='product-status mg-b-30'>
        <div class='container-fluid'>
          <div class='row'>
            <div class='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
              <div class='product-status-wrap'>
                <h4>Danh sách sản phẩm</h4>
                <div class='add-product'>
                  <a href='product-edit.html'>Thêm sản phẩm</a>
                </div>
                <table>
                  <tr>
                    <th>Image</th>
                    <th>Product Title</th>
                    <th>Status</th>
                    <th>Purchases</th>
                    <th>Product sales</th>
                    <th>Stock</th>
                    <th>Price</th>
                    <th>Setting</th>
                  </tr>
                  <tr>
                    <td>
                      <img src='img/new-product/5-small.jpg' alt='' />
                    </td>
                    <td>Product Title 1</td>
                    <td>
                      <button class='pd-setting'>Active</button>
                    </td>
                    <td>50</td>
                    <td>$750</td>
                    <td>Out Of Stock</td>
                    <td>$15</td>
                    <td>
                      <button
                        data-toggle='tooltip'
                        title='Edit'
                        class='pd-setting-ed'
                      >
                        <i class='fa fa-pencil-square-o' aria-hidden='true'></i>
                      </button>
                      <button
                        data-toggle='tooltip'
                        title='Trash'
                        class='pd-setting-ed'
                      >
                        <i class='fa fa-trash-o' aria-hidden='true'></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src='img/new-product/5-small.jpg' alt='' />
                    </td>
                    <td>Product Title 1</td>
                    <td>
                      <button class='pd-setting'>Active</button>
                    </td>
                    <td>50</td>
                    <td>$750</td>
                    <td>Out Of Stock</td>
                    <td>$15</td>
                    <td>
                      <button
                        data-toggle='tooltip'
                        title='Edit'
                        class='pd-setting-ed'
                      >
                        <i class='fa fa-pencil-square-o' aria-hidden='true'></i>
                      </button>
                      <button
                        data-toggle='tooltip'
                        title='Trash'
                        class='pd-setting-ed'
                      >
                        <i class='fa fa-trash-o' aria-hidden='true'></i>
                      </button>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
