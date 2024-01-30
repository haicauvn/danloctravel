import React from 'react';
import './style.css';

const Destination = () => {
  return (
    <>
      {/* Destination Start */}
      <div class='container-xxl py-5 destination'>
        <div class='container'>
          <div class='text-center wow fadeInUp' data-wow-delay='0.1s'>
            <h6 class='section-title bg-white text-center text-primary px-3'>
              Destination
            </h6>
            <h1 class='mb-5'>Điểm đến phổ biến</h1>
          </div>
          <div class='row g-3'>
            <div class='col-lg-7 col-md-6'>
              <div class='row g-3'>
                <div
                  class='col-lg-12 col-md-12 wow zoomIn'
                  data-wow-delay='0.1s'
                >
                  <a
                    class='position-relative d-block overflow-hidden'
                    href='/tours-travel'
                  >
                    <img
                      class='img-fluid'
                      src={require('../../../../img/du-lich-da-nang.jpg')}
                      alt=''
                    />
                    <div class='bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2'>
                      30% OFF
                    </div>
                    <div class='bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2'>
                      Đà Nẵng
                    </div>
                  </a>
                </div>
                <div
                  class='col-lg-6 col-md-12 wow zoomIn'
                  data-wow-delay='0.3s'
                >
                  <a
                    class='position-relative d-block overflow-hidden'
                    href='/tours-travel'
                  >
                    <img
                      class='img-fluid'
                      src={require('../../../../img/Hue1.png')}
                      alt=''
                    />
                    <div class='bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2'>
                      25% OFF
                    </div>
                    <div class='bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2'>
                      Huế
                    </div>
                  </a>
                </div>
                <div
                  class='col-lg-6 col-md-12 wow zoomIn'
                  data-wow-delay='0.5s'
                >
                  <a
                    class='position-relative d-block overflow-hidden'
                    href='/tours-travel'
                  >
                    <img
                      class='img-fluid'
                      src={require('../../../../img/Hoi-An-Vn.jpg')}
                      alt=''
                    />
                    <div class='bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2'>
                      35% OFF
                    </div>
                    <div class='bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2'>
                      Hội An
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div
              class='col-lg-5 col-md-6 wow zoomIn'
              data-wow-delay='0.7s'
              style={{ minHeight: '350px' }}
            >
              <a
                class='position-relative d-block h-100 overflow-hidden'
                href='/tours-travel'
              >
                <img
                  class='img-fluid position-absolute w-100 h-100'
                  src={require('../../../../img/Hinh-nen-Da-Lat-4K.jpg')}
                  alt=''
                  style={{ objectFit: 'cover' }}
                />
                <div class='bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2'>
                  20% OFF
                </div>
                <div class='bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2'>
                  Đà lạt
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Destination End */}
    </>
  );
};

export default Destination;
