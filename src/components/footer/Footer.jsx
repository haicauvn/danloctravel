import React from 'react';
import './style.css';

const Footer = () => {
  return (
    <div>
      {/* Footer Start */}
      <div
        class='container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn'
        data-wow-delay='0.1s'
      >
        <div class='container py-5'>
          <div class='row g-5'>
            <div class='col-lg-3 col-md-6'>
              <h4 class='text-white mb-3'>Company</h4>
              <a class='btn btn-link' href=''>
                About Us
              </a>
              <a class='btn btn-link' href=''>
                Contact Us
              </a>
              <a class='btn btn-link' href=''>
                Privacy Policy
              </a>
              <a class='btn btn-link' href=''>
                Terms & Condition
              </a>
              <a class='btn btn-link' href=''>
                FAQs & Help
              </a>
            </div>
            <div class='col-lg-3 col-md-6'>
              <h4 class='text-white mb-3'>Contact</h4>
              <p class='mb-2'>
                <i class='fa fa-map-marker-alt me-3'></i>31 Hòa Mỹ 5, Hòa Minh,
                Liên Chiểu, TP Đà Nẵng
              </p>
              <p class='mb-2'>
                <i class='fa fa-phone-alt me-3'></i>0945 390 774 - 0935 036 097
              </p>
              <p class='mb-2'>
                <i class='fa fa-envelope me-3'></i>dandanang74@gmail.com
              </p>
              <div class='d-flex pt-2'>
                <a class='btn btn-outline-light btn-social' href=''>
                  <i class='fab fa-twitter'></i>
                </a>
                <a class='btn btn-outline-light btn-social' href=''>
                  <i class='fab fa-facebook-f'></i>
                </a>
                <a class='btn btn-outline-light btn-social' href=''>
                  <i class='fab fa-youtube'></i>
                </a>
                <a class='btn btn-outline-light btn-social' href=''>
                  <i class='fab fa-linkedin-in'></i>
                </a>
              </div>
            </div>
            <div class='col-lg-3 col-md-6'>
              <h4 class='text-white mb-3'>Gallery</h4>
              <div class='row g-2 pt-2'>
                <div class='col-4'>
                  <img
                    class='img-fluid bg-light p-1'
                    src={require('../../img/package-1.jpg')}
                    alt=''
                  />
                </div>
                <div class='col-4'>
                  <img
                    class='img-fluid bg-light p-1'
                    src={require('../../img/package-2.jpg')}
                    alt=''
                  />
                </div>
                <div class='col-4'>
                  <img
                    class='img-fluid bg-light p-1'
                    src={require('../../img/package-3.jpg')}
                    alt=''
                  />
                </div>
                <div class='col-4'>
                  <img
                    class='img-fluid bg-light p-1'
                    src={require('../../img/package-2.jpg')}
                    alt=''
                  />
                </div>
                <div class='col-4'>
                  <img
                    class='img-fluid bg-light p-1'
                    src={require('../../img/package-3.jpg')}
                    alt=''
                  />
                </div>
                <div class='col-4'>
                  <img
                    class='img-fluid bg-light p-1'
                    src={require('../../img/package-1.jpg')}
                    alt=''
                  />
                </div>
              </div>
            </div>
            <div class='col-lg-3 col-md-6'>
              <h4 class='text-white mb-3'>Newsletter</h4>
              <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
              <div
                class='position-relative mx-auto'
                style={{ maxWidth: '400px', height: '80px' }}
              >
                <input
                  class='form-control border-primary w-100 py-3 ps-4 pe-5'
                  type='text'
                  placeholder='Your email'
                />
                <button
                  type='button'
                  class='btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2'
                >
                  SignUp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}
    </div>
  );
};

export default Footer;
