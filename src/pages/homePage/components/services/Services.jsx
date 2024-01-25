import React from 'react';
import './style.css';

const Services = () => {
  return (
    <div>
      {/* Service Start */}
      <div class='container-xxl py-5'>
        <div class='container'>
          <div class='text-center wow fadeInUp' data-wow-delay='0.1s'>
            <h6 class='section-title bg-white text-center text-primary px-3'>
              Services
            </h6>
            <h1 class='mb-5'>Dịch vụ của chúng tôi</h1>
          </div>
          <div class='row g-4'>
            <div class='col-lg-3 col-sm-6 wow fadeInUp' data-wow-delay='0.1s'>
              <div class='service-item rounded pt-3'>
                <div class='p-4'>
                  <i class='fa fa-3x fa-globe text-primary mb-4'></i>
                  <h5>WorldWide Tours</h5>
                  <p>Khám phá những điều kỳ diệu của thế giới cùng chúng tôi</p>
                </div>
              </div>
            </div>
            <div class='col-lg-3 col-sm-6 wow fadeInUp' data-wow-delay='0.5s'>
              <div class='service-item rounded pt-3'>
                <div class='p-4'>
                  <i class='fa fa-3x fa-car text-primary mb-4'></i>
                  <h5>Car Rental</h5>
                  <p>Thuê xe du lịch - tiệt cưới giá rẻ, nhanh chóng</p>
                </div>
              </div>
            </div>
            <div class='col-lg-3 col-sm-6 wow fadeInUp' data-wow-delay='0.3s'>
              <div class='service-item rounded pt-3'>
                <div class='p-4'>
                  <i class='fa fa-3x fa-hotel text-primary mb-4'></i>
                  <h5>Hotel Reservation</h5>
                  <p>Đặt phòng khách sạn nhanh chóng, tiện lợi</p>
                </div>
              </div>
            </div>
            <div class='col-lg-3 col-sm-6 wow fadeInUp' data-wow-delay='0.7s'>
              <div class='service-item rounded pt-3'>
                <div class='p-4'>
                  <i class='fa fa-3x fa-cog text-primary mb-4'></i>
                  <h5>Event Management</h5>
                  <p>Tổ chức sự kiện du lịch chuyên nghiệp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service End */}
    </div>
  );
};

export default Services;
