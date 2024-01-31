import React from 'react';
import {
  NavLink,
  useLocation,
  useMatch,
  useNavigate,
  useResolvedPath,
} from 'react-router-dom';
import './style.css';

const Header = () => {
  const navbarData = [
    {
      id: 1,
      title: 'Trang chủ',
      text: 'Tour du lịch - Thuê xe - Khách sạn',
      linkTo: '/',
    },
    {
      id: 2,
      title: 'Tours du lịch',
      text: 'Tours du lịch',
      linkTo: '/tours-travel',
    },
    {
      id: 3,
      title: 'Thuê xe',
      text: 'Thuê xe',
      linkTo: '/rent-car',
    },
    {
      id: 4,
      title: 'Khách sạn',
      text: 'Khách sạn',
      linkTo: '/hotel',
    },
    {
      id: 5,
      title: 'Liên hệ',
      text: 'Liên hệ chúng tôi',
      linkTo: '/contact',
    },
  ];

  function CustomLink({ id, to, children, ...props }) {
    const navigate = useNavigate();
    const resolvedPath = useResolvedPath(to);
    let isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
      <li
        class={`nav-item nav-link ${isActive ? 'active' : ''}`}
        onClick={() => navigate(to)}
      >
        <NavLink {...props}>{children}</NavLink>
      </li>
    );
  }
  const location = useLocation();
  const item = navbarData.filter(
    (item) => location.pathname === item.linkTo
  )[0];

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
                href='https://www.facebook.com/danloctravel'
              >
                <i class='fab fa-facebook-f fw-normal'></i>
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
              {navbarData.map((item) => (
                <CustomLink key={item.id} to={item.linkTo}>
                  {item.title}
                </CustomLink>
              ))}
            </ul>
          </div>
        </nav>

        {location.pathname === '/' && (
          <div class='container-fluid bg-primary py-5 mb-5 hero-header'>
            <div class='container py-5'>
              <div class='row justify-content-center py-5'>
                <div class='col-lg-10 pt-lg-5 mt-lg-5 text-center'>
                  <h1 class='display-3 text-white mb-3 animated slideInDown'>
                    {item ? item.text : ''}
                  </h1>
                  <p class='fs-4 text-white mb-4 animated slideInDown'>
                    Chuyên gia du lịch, đồng hành cùng bạn trên mọi hành trình
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        {location.pathname !== '/' && <div class='py-5 mb-3'></div>}
      </div>
      {/* Navbar & Hero End */}
    </div>
  );
};

export default Header;
