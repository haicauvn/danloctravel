import React, { useContext, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../../context/AppProvider';
import './style.css';

const DetailTour = () => {
  const { uuid } = useParams();
  const { allProductsData } = useContext(AppContext);

  const product = useMemo(
    () => allProductsData?.find((item) => item.uuid === uuid) || {},
    [allProductsData, uuid]
  );

  return (
    <div>
      {/* content */}
      <section class='py-5'>
        <div class='container'>
          <div class='row gx-5'>
            <aside class='col-lg-6'>
              <div class='rounded-4 mb-3 d-flex justify-content-center'>
                <img
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100vh',
                    margin: 'auto',
                  }}
                  alt=''
                  class='rounded-4 fit'
                  src={require(`../../img/${product.nameImage}`)}
                />
              </div>
            </aside>
            <main class='col-lg-6'>
              <div class='ps-lg-3'>
                <h4 class='title text-dark'>{product.title}</h4>
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
                    {product.price} <i>vnđ</i>
                  </span>
                </div>

                <p>
                  Modern look and quality demo item is a streetwear-inspired
                  collection that continues to break away from the conventions
                  of mainstream fashion. Made in Italy, these black and brown
                  clothing low-top shirts for men.
                </p>

                <div class='row'>
                  <dt class='col-3'>Type:</dt>
                  <dd class='col-9'>Regular</dd>

                  <dt class='col-3'>Color</dt>
                  <dd class='col-9'>Brown</dd>

                  <dt class='col-3'>Material</dt>
                  <dd class='col-9'>Cotton, Jeans</dd>

                  <dt class='col-3'>Brand</dt>
                  <dd class='col-9'>Reebook</dd>
                </div>

                <hr />

                <a href='#' class='btn btn-primary shadow-0'>
                  {' '}
                  Buy now{' '}
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
                    <p>
                      With supporting text below as a natural lead-in to
                      additional content. Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure
                      dolor in reprehenderit in voluptate velit esse cillum
                      dolore eu fugiat nulla pariatur.
                    </p>
                    <p>
                      With supporting text below as a natural lead-in to
                      additional content. Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure
                      dolor in reprehenderit in voluptate velit esse cillum
                      dolore eu fugiat nulla pariatur.
                    </p>
                    <p>
                      With supporting text below as a natural lead-in to
                      additional content. Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure
                      dolor in reprehenderit in voluptate velit esse cillum
                      dolore eu fugiat nulla pariatur.
                    </p>
                    <p>
                      With supporting text below as a natural lead-in to
                      additional content. Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure
                      dolor in reprehenderit in voluptate velit esse cillum
                      dolore eu fugiat nulla pariatur.
                    </p>
                    <div class='row mb-2'>
                      <div class='col-12 col-md-6'>
                        <ul class='list-unstyled mb-0'>
                          <li>
                            <i class='fas fa-check text-success me-2'></i>Some
                            great feature name here
                          </li>
                          <li>
                            <i class='fas fa-check text-success me-2'></i>Lorem
                            ipsum dolor sit amet, consectetur
                          </li>
                          <li>
                            <i class='fas fa-check text-success me-2'></i>Duis
                            aute irure dolor in reprehenderit
                          </li>
                          <li>
                            <i class='fas fa-check text-success me-2'></i>
                            Optical heart sensor
                          </li>
                        </ul>
                      </div>
                      <div class='col-12 col-md-6 mb-0'>
                        <ul class='list-unstyled'>
                          <li>
                            <i class='fas fa-check text-success me-2'></i>Easy
                            fast and ver good
                          </li>
                          <li>
                            <i class='fas fa-check text-success me-2'></i>Some
                            great feature name here
                          </li>
                          <li>
                            <i class='fas fa-check text-success me-2'></i>Modern
                            style and design
                          </li>
                        </ul>
                      </div>
                    </div>
                    <table class='table border mt-3 mb-2'>
                      <tr>
                        <th class='py-2'>Display:</th>
                        <td class='py-2'>
                          13.3-inch LED-backlit display with IPS
                        </td>
                      </tr>
                      <tr>
                        <th class='py-2'>Processor capacity:</th>
                        <td class='py-2'>2.3GHz dual-core Intel Core i5</td>
                      </tr>
                      <tr>
                        <th class='py-2'>Camera quality:</th>
                        <td class='py-2'>720p FaceTime HD camera</td>
                      </tr>
                      <tr>
                        <th class='py-2'>Memory</th>
                        <td class='py-2'>8 GB RAM or 16 GB RAM</td>
                      </tr>
                      <tr>
                        <th class='py-2'>Graphics</th>
                        <td class='py-2'>Intel Iris Plus Graphics 640</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div class='col-lg-4'>
              <div class='px-0  rounded-2 shadow-0'>
                <div class='card'>
                  <div class='card-body'>
                    <h5 class='card-title'>Similar items</h5>
                    {allProductsData.slice(0, 4).map((item) => (
                      <div class='d-flex mb-3'>
                        <a href='#' class='me-3'>
                          <img
                            src={require(`../../img/${item.nameImage}`)}
                            style={{
                              minWidth: '96px',
                              height: '96px',
                            }}
                            alt=''
                            class='img-md img-thumbnail'
                          />
                        </a>
                        <div class='info'>
                          <a href='#' class='nav-link mb-1'>
                            {item.title}
                          </a>
                          <strong class='text-dark'> {item.price}</strong>
                          <i>vnđ</i>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailTour;
