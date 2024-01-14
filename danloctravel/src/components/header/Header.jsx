import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

const Header = ({ namePage, title }) => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Top bar Start */}
      <div class='container-fluid bg-dark px-5 d-none d-lg-block'>
        <div class='row gx-0'>
          <div class='col-lg-8 text-center text-lg-start mb-2 mb-lg-0'>
            <div
              class='d-inline-flex align-items-center'
              style={{ height: '45px' }}
            >
              <small class='me-3 text-light'>
                <i class='fa fa-map-marker-alt me-2'></i>31 Hòa Mỹ 5, Hòa Minh,
                Liên Chiểu, TP Đà Nẵng
              </small>
              <small class='me-3 text-light'>
                <i class='fa fa-phone-alt me-2'></i>0945 390 774 - 0935 036 097
              </small>
              <small class='text-light'>
                <i class='fa fa-envelope-open me-2'></i>dandanang74@gmail.com
              </small>
            </div>
          </div>
          <div class='col-lg-4 text-center text-lg-end'>
            <div
              class='d-inline-flex align-items-center'
              style={{ height: '45px' }}
            >
              <a
                class='btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2'
                href=''
              >
                <i class='fab fa-twitter fw-normal'></i>
              </a>
              <a
                class='btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2'
                href='https://www.facebook.com/danloctravel'
              >
                <i class='fab fa-facebook-f fw-normal'></i>
              </a>
              <a
                class='btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2'
                href=''
              >
                <i class='fab fa-linkedin-in fw-normal'></i>
              </a>
              <a
                class='btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2'
                href=''
              >
                <i class='fab fa-instagram fw-normal'></i>
              </a>
              <a
                class='btn btn-sm btn-outline-light btn-sm-square rounded-circle'
                href=''
              >
                <i class='fab fa-youtube fw-normal'></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Top bar End */}

      {/* Navbar & Hero Start */}
      <div class='container-fluid position-relative p-0'>
        <nav class='navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0'>
          <a href='' class='navbar-brand p-0'>
            <h1 class='text-primary m-0'>
              <i class='fa fa-map-marker-alt me-3'></i>Dan Loc Travel
            </h1>
          </a>
          <button
            class='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarCollapse'
          >
            <span class='fa fa-bars'></span>
          </button>
          <div class='collapse navbar-collapse' id='navbarCollapse'>
            <ul class='navbar-nav ms-auto py-0'>
              <li
                onClick={() => navigate('/')}
                class='nav-item nav-link active'
              >
                Home
              </li>
              <li onClick={() => navigate('/about')} class='nav-item nav-link'>
                About
              </li>
              <li
                onClick={() => navigate('/services')}
                class='nav-item nav-link'
              >
                Services
              </li>
              <li
                onClick={() => navigate('/packages')}
                class='nav-item nav-link'
              >
                Packages
              </li>
              <li
                onClick={() => navigate('/contact')}
                class='nav-item nav-link'
              >
                Contact
              </li>
            </ul>
          </div>
        </nav>

        <div class='container-fluid bg-primary py-5 mb-5 hero-header'>
          <div class='container py-5'>
            <div class='row justify-content-center py-5'>
              <div class='col-lg-10 pt-lg-5 mt-lg-5 text-center'>
                <h1 class='display-3 text-white mb-3 animated slideInDown'>
                  {title}
                </h1>
                {namePage === 'home' ? (
                  <>
                    <p class='fs-4 text-white mb-4 animated slideInDown'>
                      Tempor erat elitr rebum at clita diam amet diam et eos
                      erat ipsum lorem sit
                    </p>
                    <div class='position-relative w-75 mx-auto animated slideInDown'>
                      <input
                        class='form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5'
                        type='text'
                        placeholder='Eg: Thailand'
                      />
                      <button
                        type='button'
                        class='btn btn-primary rounded-pill py-2 px-4 position-absolute top-0 end-0 me-2'
                        style={{ marginTop: '7px' }}
                      >
                        Search
                      </button>
                    </div>
                  </>
                ) : (
                  <nav aria-label='breadcrumb'>
                    <ol class='breadcrumb justify-content-center'>
                      <li class='breadcrumb-item'>
                        <a href='#'>Home</a>
                      </li>
                      <li
                        class='breadcrumb-item text-white active'
                        aria-current='page'
                      >
                        {namePage}
                      </li>
                    </ol>
                  </nav>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Navbar & Hero End */}
    </div>
  );
};

export default Header;
