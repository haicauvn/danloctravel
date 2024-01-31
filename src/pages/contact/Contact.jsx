import React from 'react';

const Contact = () => {
  return (
    <>
      {/* <!-- Contact Start --> */}
      <div class='container-xxl py-5'>
        <div class='container'>
          <div class='text-center wow fadeInUp' data-wow-delay='0.1s'>
            <h6 class='section-title bg-white text-center text-primary px-3'>
              Liên hệ chúng tôi
            </h6>
            <h1 class='mb-5'>Liên hệ chúng tôi với bất cứ câu hỏi nào</h1>
          </div>
          <div class='row g-4'>
            <div class='col-lg-4 col-md-6 wow fadeInUp' data-wow-delay='0.1s'>
              {/* <h5>Get In Touch</h5>
              <p class='mb-4'>
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos
              </p> */}
              <div class='d-flex align-items-center mb-4'>
                <div
                  class='d-flex align-items-center justify-content-center flex-shrink-0 bg-primary'
                  style={{ width: '50px', height: '50px' }}
                >
                  <i class='fa fa-map-marker-alt text-white'></i>
                </div>
                <div class='ms-3'>
                  <h5 class='text-primary'>Office</h5>
                  <p class='mb-0'>
                    31 Hòa Mỹ 5, Hòa Minh, Liên Chiểu, TP Đà Nẵng
                  </p>
                </div>
              </div>
              <div class='d-flex align-items-center mb-4'>
                <div
                  class='d-flex align-items-center justify-content-center flex-shrink-0 bg-primary'
                  style={{ width: '50px', height: '50px' }}
                >
                  <i class='fa fa-phone-alt text-white'></i>
                </div>
                <div class='ms-3'>
                  <h5 class='text-primary'>Mobile</h5>
                  <p class='mb-0'>0945 390 774 - 0935 036 097</p>
                </div>
              </div>
              <div class='d-flex align-items-center'>
                <div
                  class='d-flex align-items-center justify-content-center flex-shrink-0 bg-primary'
                  style={{ width: '50px', height: '50px' }}
                >
                  <i class='fa fa-envelope-open text-white'></i>
                </div>
                <div class='ms-3'>
                  <h5 class='text-primary'>Email</h5>
                  <p class='mb-0'>dandanang74@gmail.com</p>
                </div>
              </div>
            </div>
            <div class='col-lg-4 col-md-6 wow fadeInUp' data-wow-delay='0.3s'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7668.302661731545!2d108.163002!3d16.057635!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421922df71fcc3%3A0x7eedbd9e991bfc76!2zQ8O0bmcgVHkgVE5ISCBE4buLY2ggVuG7pSBWw6AgRHUgTOG7i2NoIEThuqduIEzhu5lj!5e0!3m2!1svi!2sus!4v1705308228253!5m2!1svi!2sus'
                width='350'
                height='350'
                style={{ minWidth: '300px', border: '0' }}
                allowfullscreen=''
                loading='lazy'
                referrerpolicy='no-referrer-when-downgrade'
                title='Công Ty TNHH Dịch Vụ Và Du Lịch Dần Lộc'
              ></iframe>
            </div>
            <div class='col-lg-4 col-md-12 wow fadeInUp' data-wow-delay='0.5s'>
              <form>
                <div class='row g-3'>
                  <div class='col-md-6'>
                    <div class='form-floating'>
                      <input
                        type='text'
                        class='form-control'
                        id='name'
                        placeholder='Your Name'
                      />
                      <label for='name'>Your Name</label>
                    </div>
                  </div>
                  <div class='col-md-6'>
                    <div class='form-floating'>
                      <input
                        type='email'
                        class='form-control'
                        id='email'
                        placeholder='Your Email'
                      />
                      <label for='email'>Your Email</label>
                    </div>
                  </div>
                  <div class='col-12'>
                    <div class='form-floating'>
                      <input
                        type='text'
                        class='form-control'
                        id='subject'
                        placeholder='Subject'
                      />
                      <label for='subject'>Subject</label>
                    </div>
                  </div>
                  <div class='col-12'>
                    <div class='form-floating'>
                      <textarea
                        class='form-control'
                        placeholder='Leave a message here'
                        id='message'
                        style={{ height: '100px' }}
                      ></textarea>
                      <label for='message'>Message</label>
                    </div>
                  </div>
                  <div class='col-12'>
                    <button class='btn btn-primary w-100 py-3' type='submit'>
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Contact End --> */}
    </>
  );
};

export default Contact;
