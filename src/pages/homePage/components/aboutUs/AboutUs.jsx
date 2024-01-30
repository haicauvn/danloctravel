import React from 'react';

const AboutUs = () => {
  return (
    <div>
      {/* About Start */}
      <div class='container-xxl py-5'>
        <div class='container'>
          <div class='row g-5'>
            <div class='col-lg-6 wow fadeInUp' data-wow-delay='0.3s'>
              <h6 class='section-title bg-white text-start text-primary pe-3'>
                About Us
              </h6>
              <h1 class='mb-4'>
                Welcome to <span class='text-primary'>Dan Loc Travel</span>
              </h1>
              <p class='mb-4'>
                Dần Lộc Travel là công ty du lịch chuyên tổ chức tour du lịch Đà
                Nẵng và Huế. Với kinh nghiệm hơn 10 năm trong lĩnh vực du lịch,
                chúng tôi cam kết mang đến cho du khách những trải nghiệm du
                lịch tuyệt vời với giá cả hợp lý.
              </p>
              <p class='mb-4'>
                Dần Lộc Travel sở hữu đội ngũ nhân viên chuyên nghiệp, tận tâm,
                có kinh nghiệm dày dặn trong lĩnh vực du lịch. Chúng tôi luôn
                sẵn sàng tư vấn và hỗ trợ du khách lựa chọn được tour du lịch
                phù hợp với nhu cầu và sở thích của mình.
              </p>
              <p class='mb-4'>
                Chúng tôi cung cấp đa dạng các loại tour du lịch từ tour trong
                ngày đến tour nhiều ngày, tour trọn gói đến tour tự do. Chúng
                tôi cũng cung cấp dịch vụ đặt vé máy bay, khách sạn, xe du
                lịch,...
              </p>
              <div class='row gy-2 gx-4 mb-4'>
                <div class='col-sm-6'>
                  <p class='mb-0'>
                    <i class='fa fa-arrow-right text-primary me-2'></i>First
                    Class Flights
                  </p>
                </div>
                <div class='col-sm-6'>
                  <p class='mb-0'>
                    <i class='fa fa-arrow-right text-primary me-2'></i>
                    Handpicked Hotels
                  </p>
                </div>
                <div class='col-sm-6'>
                  <p class='mb-0'>
                    <i class='fa fa-arrow-right text-primary me-2'></i>5 Star
                    Accommodations
                  </p>
                </div>
                <div class='col-sm-6'>
                  <p class='mb-0'>
                    <i class='fa fa-arrow-right text-primary me-2'></i>Latest
                    Model Vehicles
                  </p>
                </div>
                <div class='col-sm-6'>
                  <p class='mb-0'>
                    <i class='fa fa-arrow-right text-primary me-2'></i>150
                    Premium City Tours
                  </p>
                </div>
                <div class='col-sm-6'>
                  <p class='mb-0'>
                    <i class='fa fa-arrow-right text-primary me-2'></i>24/7
                    Service
                  </p>
                </div>
              </div>
              {/* <a class='btn btn-primary py-3 px-5 mt-2' href=''>
                Read More
              </a> */}
            </div>
            <div class='col-lg-6'>
              <div class='row g-3'>
                <div class='col-6 text-end'>
                  <img
                    class='img-fluid rounded w-75 wow zoomIn'
                    data-wow-delay='0.1s'
                    src={require('../../../../img/about-1.jpg')}
                    style={{ marginTop: '25%' }}
                    alt='image1'
                  />
                </div>
                <div class='col-6 text-start'>
                  <img
                    class='img-fluid rounded w-100 wow zoomIn'
                    data-wow-delay='0.3s'
                    src={require('../../../../img/about-2.jpg')}
                    alt='image2'
                  />
                </div>
                <div class='col-6 text-end'>
                  <img
                    class='img-fluid rounded w-50 wow zoomIn'
                    data-wow-delay='0.5s'
                    src={require('../../../../img/about-3.jpg')}
                    alt='image3'
                  />
                </div>
                <div class='col-6 text-start'>
                  <img
                    class='img-fluid rounded w-75 wow zoomIn'
                    data-wow-delay='0.7s'
                    src={require('../../../../img/about-4.jpg')}
                    alt='image4'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
    </div>
  );
};

export default AboutUs;
