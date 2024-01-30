import parse from 'html-react-parser';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../../context/AppProvider';
import useGetUrlImage from '../../hooks/useGetUrlImage';
import PageNotFound from '../../pages/404/PageNotFound';
import './style.css';

const Product = ({ item }) => {
  const urlImage = useGetUrlImage(item);
  const navigate = useNavigate();
  return (
    <>
      <div class='d-flex mb-3'>
        <img
          src={urlImage}
          style={{
            width: '96px',
            height: '96px',
          }}
          alt=''
          class='img-md img-thumbnail'
        />
        <div class='info'>
          <div
            class='nav-link'
            onClick={() => navigate(`/detail/${item.uuid}`)}
            style={{ cursor: 'pointer' }}
          >
            {item.title}
          </div>
          <div class='text-dark mx-3'>
            {item.price}
            <i> vnđ</i>
          </div>
        </div>
      </div>
    </>
  );
};

const DetailTour = () => {
  const { uuid } = useParams();
  const navigate = useNavigate();
  const { allProductsData } = useContext(AppContext);
  const [similarProduct, setSimilarProduct] = useState([]);

  const productData = useMemo(
    () => allProductsData.find((item) => item.uuid === uuid) || {},
    [allProductsData, uuid]
  );

  const urlImage = useGetUrlImage(productData);

  // Get similar products
  useEffect(() => {
    setSimilarProduct(
      allProductsData
        .filter(
          (item) =>
            item.typeProduct === productData.typeProduct && item.uuid !== uuid
        )
        .slice(0, 4)
    );
  }, [allProductsData, productData.typeProduct, uuid]);

  if (!productData.title) return <PageNotFound />;

  return (
    <>
      {/* content */}
      <section class='py-5'>
        <div class='container'>
          <div class='row gx-5'>
            <aside class='col-lg-6'>
              <div class='rounded-4 mb-3 d-flex justify-content-center'>
                <img
                  style={{
                    maxWidth: '100%',
                    maxHeight: '50vh',
                    margin: 'auto',
                  }}
                  alt=''
                  class='rounded-4 fit'
                  src={urlImage}
                />
              </div>
            </aside>
            <main class='col-lg-6'>
              <div class='ps-lg-3'>
                <h4 class='title text-dark'>{productData.title}</h4>
                <div class='d-flex flex-row my-3'>
                  <div class='text-warning mb-1 me-2'>
                    <small class='fa fa-star text-primary'></small>
                    <small class='fa fa-star text-primary'></small>
                    <small class='fa fa-star text-primary'></small>
                    <small class='fa fa-star text-primary'></small>
                    <small class='fa fa-star text-primary'></small>
                  </div>
                </div>
                {productData.typeProduct === 'hotel' && (
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
                )}
                <div class='mb-3'>
                  <span class='h5'>
                    {productData.price} <i>vnđ</i>
                  </span>
                </div>
                <div class='mb-3'>
                  <b>{productData.description}</b>
                </div>
                {productData.typeProduct === 'tour-travel' && (
                  <div class='row'>
                    <dt class='col-3'>
                      <i class='fas fa-hotel text-primary me-2'></i>Khách sạn:
                    </dt>
                    <dd class='col-9'>{productData.typeHotel}</dd>

                    <dt class='col-3'>
                      <i class='fas fa-calendar-alt text-primary me-2'></i> Khởi
                      hành:
                    </dt>
                    <dd class='col-9'>{productData.depart}</dd>

                    <dt class='col-3'>
                      <i class='fas fa-road text-primary me-2'></i>Phương tiện:
                    </dt>
                    <dd class='col-9'>{productData.pickup}</dd>
                  </div>
                )}
                <hr />
                <div
                  onClick={() => navigate('/contact')}
                  class='btn btn-primary shadow-0'
                >
                  {' '}
                  Liên hệ ngay{' '}
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
      {/* content */}
      <section class='bg-light border-top py-4'>
        <div class='container'>
          <div class='row gx-4'>
            <div class='col-lg-8 mb-4'>
              <div class='border rounded-2 px-3 py-2 bg-white'>
                <div class='tab-content'>
                  <div
                    class='tab-pane fade show active'
                    id='ex1-pills-1'
                    role='tabpanel'
                    aria-labelledby='ex1-tab-1'
                  >
                    {parse(productData.content)}
                  </div>
                </div>
              </div>
            </div>
            {similarProduct.length && (
              <div class='col-lg-4'>
                <div class='px-0  rounded-2 shadow-0'>
                  <div class='card'>
                    <div class='card-body'>
                      <h5 class='card-title'>Similar items</h5>
                      {similarProduct.map((item) => (
                        <Product item={item} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailTour;
