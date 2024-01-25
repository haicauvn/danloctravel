import React from 'react';
import { useNavigate } from 'react-router-dom';
import useGetUrlImage from '../../hooks/useGetUrlImage';
import './style.css';

const Product = ({ product }) => {
  const navigate = useNavigate();
  const urlImage = useGetUrlImage(product);

  const handleDetail = () => {
    navigate(`/detail/${product.uuid}`);
  };

  return (
    <div class='col-lg-3 col-md-6 wow fadeInUp' data-wow-delay='0.1s'>
      <div class='product-item text-center'>
        <div class='overflow-hidden' style={{ height: '170px' }}>
          <img class='img-fluid' src={urlImage} alt='' />
        </div>
        <div class='d-flex border-bottom'>
          <small class='flex-fill text-center border-end py-2'>
            <i class='far fa-clock text-primary me-2'></i>
            {product.time}
          </small>
          <small class='flex-fill text-center border-end py-2'>
            <i class='fas fa-dollar-sign  text-primary me-2'></i>
            {product.price}
          </small>
        </div>
        <div class='text-center p-4'>
          <div class='mb-0 product-title'>{product.title}</div>
          <div class='mb-3'>
            <small class='fa fa-star text-primary'></small>
            <small class='fa fa-star text-primary'></small>
            <small class='fa fa-star text-primary'></small>
            <small class='fa fa-star text-primary'></small>
            <small class='fa fa-star text-primary'></small>
          </div>
          <div class='product-description'>{product.description}</div>
          <div class='d-flex justify-content-center mb-2'>
            <div
              class='btn btn-sm btn-primary px-3 border-end'
              style={{ borderRadius: '30px' }}
              onClick={handleDetail}
            >
              Xem chi tiết
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
