import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { uid } from 'uid';
import { addDocument } from '../../../firebase/services';
import useFirestore from '../../../hooks/useFirestore';
import './style.css';
import { useMemo, useState } from 'react';

const AddProduct = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const uuid = uid();

  const onSubmit = (data) => {
    addDocument('products', {
      uuid,
      title: data.title,
      typeProduct: data.typeProduct,
      price: data.price,
      nameImage: data.nameImage,
      time: data.time,
      description: data.description,
    });
    navigate('/admin');
  };

  const { productId } = useParams();

  const productCondition = useMemo(() => {
    return {
      fieldName: 'uuid',
      operator: '==',
      compareValue: productId,
    };
  }, [productId]);

  const product = useFirestore('products', productCondition)[0];
  console.log('product', product);
  const [values, setInputValues] = useState(product);

  const handleChange = (event) => {
    setInputValues({ [event.target.name]: event.target.value });
  };

  console.log('values', values);

  return (
    <div class='container-fluid px-1 py-5 mx-auto add-product'>
      <div class='row d-flex justify-content-center'>
        <div class='col-xl-7 col-lg-8 col-md-9 col-11 text-center'>
          <h3>Request a Demo</h3>
          <p class='blue-text'>
            Just answer a few questions
            <br /> so that we can personalize the right experience for you.
          </p>
          <div class='card'>
            <h5 class='text-center mb-4'>Powering world-class companies</h5>
            <form class='form-card' onSubmit={handleSubmit(onSubmit)}>
              <div class='row justify-content-between text-left'>
                <div class='form-group col-sm-6 flex-column d-flex'>
                  {' '}
                  <label class='form-control-label px-3'>
                    Title<span class='text-danger'> *</span>
                  </label>{' '}
                  <input
                    type='text'
                    autoComplete='off'
                    {...register('title', {
                      required: true,
                    })}
                    value={values?.title}
                    onChange={handleChange}
                  />
                  {errors.title && <p>Title is required and must be valid</p>}{' '}
                </div>
                <div class='form-group col-sm-6 flex-column d-flex'>
                  {' '}
                  <label class='form-control-label px-3'>
                    Type product<span class='text-danger'> *</span>
                  </label>{' '}
                  <select
                    autoComplete='off'
                    {...register('typeProduct', {
                      required: true,
                    })}
                    value={values?.typeProduct}
                    onChange={handleChange}
                  >
                    <option value='tour-travel'>Tour du lịch</option>
                    <option value='rent-car'>Thuê xe du lịch</option>
                    <option value='hotel'>Khách sạn</option>
                  </select>{' '}
                  {errors.typeProduct && (
                    <p>Type product is required and must be valid</p>
                  )}{' '}
                </div>
              </div>
              <div class='row justify-content-between text-left'>
                <div class='form-group col-sm-6 flex-column d-flex'>
                  {' '}
                  <label class='form-control-label px-3'>
                    Price<span class='text-danger'> *</span>
                  </label>{' '}
                  <input
                    type='text'
                    autoComplete='off'
                    {...register('price', {
                      required: true,
                    })}
                    value={values?.price}
                    onChange={handleChange}
                  />
                  {errors.price && <p>Price is required and must be valid</p>}{' '}
                </div>
                <div class='form-group col-sm-6 flex-column d-flex'>
                  {' '}
                  <label class='form-control-label px-3'>
                    Name image<span class='text-danger'> *</span>
                  </label>{' '}
                  <input
                    type='text'
                    autoComplete='off'
                    {...register('nameImage', {
                      required: true,
                    })}
                    value={values?.nameImage}
                    onChange={handleChange}
                  />
                  {errors.nameImage && (
                    <p>Name image is required and must be valid</p>
                  )}{' '}
                </div>
              </div>
              <div class='row justify-content-between text-left'>
                <div class='form-group col-sm-6 flex-column d-flex'>
                  {' '}
                  <label class='form-control-label px-3'>
                    Time<span class='text-danger'> *</span>
                  </label>{' '}
                  <input
                    type='text'
                    autoComplete='off'
                    {...register('time', {
                      required: true,
                    })}
                    value={values?.time}
                    onChange={handleChange}
                  />
                  {errors.time && <p>Time is required and must be valid</p>}{' '}
                </div>
              </div>
              <div class='row justify-content-between text-left'>
                <div class='form-group col-12 flex-column d-flex'>
                  {' '}
                  <label class='form-control-label px-3'>
                    Description
                    <span class='text-danger'> *</span>
                  </label>{' '}
                  <input
                    type='text'
                    autoComplete='off'
                    {...register('description', {
                      required: true,
                    })}
                    value={values?.description}
                    onChange={handleChange}
                  />
                  {errors.description && (
                    <p>Description is required and must be valid</p>
                  )}{' '}
                </div>
              </div>
              <div class='row justify-content-end'>
                <div class='form-group col-sm-6'>
                  {' '}
                  {!product ? (
                    <button type='submit' class='btn-block btn-primary'>
                      Add
                    </button>
                  ) : (
                    <>
                      <button type='submit' class='btn-block btn-success'>
                        Update
                      </button>
                    </>
                  )}{' '}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
