import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

const Product = () => {
  const navigate = useNavigate();
  //   const imageBaseUrl = process.env.REACT_APP_IMAGE_BASE_URL;

  const productData = {
    id: '1',
    type: 'tour-travel',
    title: 'Da Nang - Da Lat',
    description:
      'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos',
    price: '149.00',
    nameImage: 'package-1.jpg',
    time: '3 days',
  };

  return (
    <div class='col-lg-3 col-md-6 wow fadeInUp' data-wow-delay='0.1s'>
      <div class='product-item'>
        <div class='overflow-hidden'>
          <img
            class='img-fluid'
            //   src={require(`${imageBaseUrl}/package-1.jpg`)}
            src={require(`../../img/${productData.nameImage}`)}
            alt=''
          />
        </div>
        <div class='d-flex border-bottom'>
          <small class='flex-fill text-center border-end py-2'>
            <i class='fa fa-map-marker-alt text-primary me-2'></i>
            {productData.title}
          </small>
          <small class='flex-fill text-center border-end py-2'>
            <i class='fa fa-calendar-alt text-primary me-2'></i>
            {productData.time}
          </small>
        </div>
        <div class='text-center p-4'>
          <h3 class='mb-0'>${productData.price}</h3>
          <div class='mb-3'>
            <small class='fa fa-star text-primary'></small>
            <small class='fa fa-star text-primary'></small>
            <small class='fa fa-star text-primary'></small>
            <small class='fa fa-star text-primary'></small>
            <small class='fa fa-star text-primary'></small>
          </div>
          <p>{productData.description}</p>
          <div class='d-flex justify-content-center mb-2'>
            <a
              href='#'
              class='btn btn-sm btn-primary px-3 border-end'
              style={{ borderRadius: '30px 0 0 30px' }}
            >
              Read More
            </a>
            <div
              class='btn btn-sm btn-primary px-3'
              style={{ borderRadius: '0 30px 30px 0' }}
              onClick={() => navigate(`/tours-travel/${1}`)}
            >
              Book Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
