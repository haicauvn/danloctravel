import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

const Tours = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Package Start */}
      <div class='container-xxl py-5'>
        <div class='container'>
          <div class='text-center wow fadeInUp' data-wow-delay='0.1s'>
            <h6 class='section-title bg-white text-center text-primary px-3'>
              Tours
            </h6>
            <h1 class='mb-5'>Awesome Tours</h1>
          </div>
          <div class='row g-4 justify-content-center'>
            <div class='col-lg-3 col-md-6 wow fadeInUp' data-wow-delay='0.1s'>
              <div class='package-item'>
                <div class='overflow-hidden'>
                  <img
                    class='img-fluid'
                    src={require('../../../../img/package-1.jpg')}
                    alt=''
                  />
                </div>
                <div class='d-flex border-bottom'>
                  <small class='flex-fill text-center border-end py-2'>
                    <i class='fa fa-map-marker-alt text-primary me-2'></i>
                    Da Nang - Da Lat
                  </small>
                  <small class='flex-fill text-center border-end py-2'>
                    <i class='fa fa-calendar-alt text-primary me-2'></i>3 days
                  </small>
                </div>
                <div class='text-center p-4'>
                  <h3 class='mb-0'>$149.00</h3>
                  <div class='mb-3'>
                    <small class='fa fa-star text-primary'></small>
                    <small class='fa fa-star text-primary'></small>
                    <small class='fa fa-star text-primary'></small>
                    <small class='fa fa-star text-primary'></small>
                    <small class='fa fa-star text-primary'></small>
                  </div>
                  <p>
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit
                    diam amet diam eos
                  </p>
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
            <div class='col-lg-3 col-md-6 wow fadeInUp' data-wow-delay='0.3s'>
              <div class='package-item'>
                <div class='overflow-hidden'>
                  <img
                    class='img-fluid'
                    src={require('../../../../img/package-2.jpg')}
                    alt=''
                  />
                </div>
                <div class='d-flex border-bottom'>
                  <small class='flex-fill text-center border-end py-2'>
                    <i class='fa fa-map-marker-alt text-primary me-2'></i>
                    Sai gon - Da Nang
                  </small>
                  <small class='flex-fill text-center border-end py-2'>
                    <i class='fa fa-calendar-alt text-primary me-2'></i>3 days
                  </small>
                </div>
                <div class='text-center p-4'>
                  <h3 class='mb-0'>$139.00</h3>
                  <div class='mb-3'>
                    <small class='fa fa-star text-primary'></small>
                    <small class='fa fa-star text-primary'></small>
                    <small class='fa fa-star text-primary'></small>
                    <small class='fa fa-star text-primary'></small>
                    <small class='fa fa-star text-primary'></small>
                  </div>
                  <p>
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit
                    diam amet diam eos
                  </p>
                  <div class='d-flex justify-content-center mb-2'>
                    <a
                      href='#'
                      class='btn btn-sm btn-primary px-3 border-end'
                      style={{ borderRadius: '30px 0 0 30px' }}
                    >
                      Read More
                    </a>
                    <a
                      href='#'
                      class='btn btn-sm btn-primary px-3'
                      style={{ borderRadius: '0 30px 30px 0' }}
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class='col-lg-3 col-md-6 wow fadeInUp' data-wow-delay='0.5s'>
              <div class='package-item'>
                <div class='overflow-hidden'>
                  <img
                    class='img-fluid'
                    src={require('../../../../img/package-3.jpg')}
                    alt=''
                  />
                </div>
                <div class='d-flex border-bottom'>
                  <small class='flex-fill text-center border-end py-2'>
                    <i class='fa fa-map-marker-alt text-primary me-2'></i>
                    Da lat - Nha Trang
                  </small>
                  <small class='flex-fill text-center border-end py-2'>
                    <i class='fa fa-calendar-alt text-primary me-2'></i>3 days
                  </small>
                </div>
                <div class='text-center p-4'>
                  <h3 class='mb-0'>$189.00</h3>
                  <div class='mb-3'>
                    <small class='fa fa-star text-primary'></small>
                    <small class='fa fa-star text-primary'></small>
                    <small class='fa fa-star text-primary'></small>
                    <small class='fa fa-star text-primary'></small>
                    <small class='fa fa-star text-primary'></small>
                  </div>
                  <p>
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit
                    diam amet diam eos
                  </p>
                  <div class='d-flex justify-content-center mb-2'>
                    <a
                      href='#'
                      class='btn btn-sm btn-primary px-3 border-end'
                      style={{ borderRadius: '30px 0 0 30px' }}
                    >
                      Read More
                    </a>
                    <a
                      href='#'
                      class='btn btn-sm btn-primary px-3'
                      style={{ borderRadius: '0 30px 30px 0' }}
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class='col-lg-3 col-md-6 wow fadeInUp' data-wow-delay='0.7s'>
              <div class='package-item'>
                <div class='overflow-hidden'>
                  <img
                    class='img-fluid'
                    src={require('../../../../img/package-3.jpg')}
                    alt=''
                  />
                </div>
                <div class='d-flex border-bottom'>
                  <small class='flex-fill text-center border-end py-2'>
                    <i class='fa fa-map-marker-alt text-primary me-2'></i>
                    Nha Trang - Da Nang
                  </small>
                  <small class='flex-fill text-center border-end py-2'>
                    <i class='fa fa-calendar-alt text-primary me-2'></i>3 days
                  </small>
                </div>
                <div class='text-center p-4'>
                  <h3 class='mb-0'>$189.00</h3>
                  <div class='mb-3'>
                    <small class='fa fa-star text-primary'></small>
                    <small class='fa fa-star text-primary'></small>
                    <small class='fa fa-star text-primary'></small>
                    <small class='fa fa-star text-primary'></small>
                    <small class='fa fa-star text-primary'></small>
                  </div>
                  <p>
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit
                    diam amet diam eos
                  </p>
                  <div class='d-flex justify-content-center mb-2'>
                    <a
                      href='#'
                      class='btn btn-sm btn-primary px-3 border-end'
                      style={{ borderRadius: '30px 0 0 30px' }}
                    >
                      Read More
                    </a>
                    <a
                      href='#'
                      class='btn btn-sm btn-primary px-3'
                      style={{ borderRadius: '0 30px 30px 0' }}
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Package End */}
    </>
  );
};

export default Tours;
