import React, { useEffect } from 'react';
import Product from '../../../../components/product/Product';
import { db } from '../../../../firebase/config';
import './style.css';

const Tours = () => {
  useEffect(() => {
    db.collection('product').onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log({ data, snapshot, docs: snapshot.docs });
    });
  }, []);

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
            {Array.from({ length: 4 }, (v, i) => (
              <Product />
            ))}
          </div>
        </div>
      </div>
      {/* Package End */}
    </>
  );
};

export default Tours;
