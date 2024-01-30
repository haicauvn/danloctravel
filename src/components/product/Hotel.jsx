import React from 'react';
import { useNavigate } from 'react-router-dom';
import useGetUrlImage from '../../hooks/useGetUrlImage';
import './style.css';

const Hotel = ({ product }) => {
  const navigate = useNavigate();
  const urlImage = useGetUrlImage(product);

  const handleDetail = () => {
    navigate(`/detail/${product.uuid}`);
  };

  return (
    <div class='col-lg-3 col-md-6 wow fadeInUp' data-wow-delay='0.1s'>
      <div class='room-item shadow rounded overflow-hidden'>
        <div class='position-relative'>
          <img class='img-fluid' src={urlImage} alt='' />
          <small class='position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4'>
            {product.price}/Night
          </small>
        </div>
        <div class='p-4 mt-2'>
          <div class='justify-content-between mb-3'>
            <h5 class='mb-0'>{product.title}</h5>
            <div class='mt-1'>
              <small class='fa fa-star text-primary'></small>
              <small class='fa fa-star text-primary'></small>
              <small class='fa fa-star text-primary'></small>
              <small class='fa fa-star text-primary'></small>
              <small class='fa fa-star text-primary'></small>
            </div>
          </div>
          <div class='d-flex mb-3'>
            <small class='border-end me-3 pe-3'>
              <i class='fa fa-bed text-primary me-2'></i>3 Bed
            </small>
            <small class='border-end me-3 pe-3'>
              <i class='fa fa-bath text-primary me-2'></i>2 Bath
            </small>
            <small>
              <i class='fa fa-wifi text-primary me-2'></i>Wifi
            </small>
          </div>
          <p class='text-body mb-3 product-description'>
            {product.description}
          </p>
          <div class='d-flex justify-content-between'>
            <div
              onClick={handleDetail}
              class='btn btn-sm btn-primary rounded py-2 px-4'
              href=''
            >
              View Detail
            </div>
            <a class='btn btn-sm btn-dark rounded py-2 px-4' href=''>
              Book Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
