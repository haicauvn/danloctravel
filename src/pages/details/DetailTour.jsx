import React, { useContext, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../../context/AppProvider';
import useGetUrlImage from '../../hooks/useGetUrlImage';
import PageNotFound from '../../pages/404/PageNotFound';
import './style.css';

const Product = ({ item }) => {
  const urlImage = useGetUrlImage(item);

  return (
    <>
      <div class='d-flex mb-3'>
        <a href='#' class='me-3'>
          <img
            src={urlImage}
            style={{
              width: '96px',
              height: '96px',
            }}
            alt=''
            class='img-md img-thumbnail'
          />
        </a>
        <div class='info'>
          <a href='#' class='nav-link'>
            {item.title}
          </a>
          <div class='text-dark ml-3'>
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
  const { allProductsData } = useContext(AppContext);

  const productData = useMemo(
    () => allProductsData.find((item) => item.uuid === uuid) || {},
    [allProductsData, uuid]
  );

  const urlImage = useGetUrlImage(productData);

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

                <div class='mb-3'>
                  <span class='h5'>
                    {productData.price} <i>vnđ</i>
                  </span>
                </div>
                <div class='mb-2'>
                  <b>{productData.description}</b>
                </div>
                <div class='row'>
                  <dt class='col-3'>Khách sạn:</dt>
                  <dd class='col-9'>{productData.typeHotel}</dd>

                  <dt class='col-3'>Khởi hành:</dt>
                  <dd class='col-9'>{productData.depart}</dd>

                  <dt class='col-3'>Phương tiện:</dt>
                  <dd class='col-9'>{productData.pickup}</dd>
                </div>

                <hr />

                <a href='#' class='btn btn-primary shadow-0'>
                  {' '}
                  Book now{' '}
                </a>
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
                    {productData.content}
                  </div>
                </div>
              </div>
            </div>
            {allProductsData.length && (
              <div class='col-lg-4'>
                <div class='px-0  rounded-2 shadow-0'>
                  <div class='card'>
                    <div class='card-body'>
                      <h5 class='card-title'>Similar items</h5>
                      {allProductsData.slice(0, 4).map((item) => (
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
