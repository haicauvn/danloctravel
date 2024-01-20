import { doc, setDoc } from 'firebase/firestore';
import { useContext, useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { uid } from 'uid';
import { AppContext } from '../../../context/AppProvider';
import { db } from '../../../firebase/config';
import { addDocument } from '../../../firebase/services';
import './style.css';

const AddProduct = () => {
  const navigate = useNavigate();
  const uuid = uid();
  const { productId } = useParams();
  const isAddMode = !productId;
  const { allProductsData } = useContext(AppContext);

  const {
    reset,
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleCreateProduct = (data) => {
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

  const handleUpdateProduct = (data) => {
    const newData = { ...product, ...data };
    const docRef = doc(db, 'products', product.id);
    setDoc(docRef, newData)
      .then((docRef) => {
        alert('Entire Document has been updated successfully');
      })
      .catch((error) => {
        console.log(error);
      });
    navigate('/admin');
  };

  const onSubmit = (data) =>
    isAddMode ? handleCreateProduct(data) : handleUpdateProduct(data);

  const product = useMemo(
    () => allProductsData?.find((item) => item.uuid === productId) || {},
    [allProductsData, productId]
  );

  // get user and set form fields
  useEffect(() => {
    if (!isAddMode) {
      const fields = [
        'title',
        'nameImage',
        'price',
        'typeProduct',
        'time',
        'description',
      ];
      fields.forEach((field) => setValue(field, product[field]));
    }
  }, [isAddMode, product, setValue]);

  return (
    <div class='container-fluid px-1 py-5 mx-auto add-product'>
      <div class='row d-flex justify-content-center'>
        <div class='col-xl-7 col-lg-8 col-md-9 col-11 text-center'>
          <div class='card'>
            <h3 class='text-center mb-5'>
              {isAddMode ? 'Create product' : 'Update product'}
            </h3>
            <form
              class='form-card'
              onSubmit={handleSubmit(onSubmit)}
              onReset={reset}
            >
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
                  />
                  {errors.title && <p>Title is required and must be valid</p>}{' '}
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
                  />
                  {errors.time && <p>Time is required and must be valid</p>}{' '}
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
                  <div>
                    <input
                      type='text'
                      autoComplete='off'
                      {...register('price', {
                        required: true,
                      })}
                    />{' '}
                    <i>vnđ</i>
                  </div>
                  {errors.price && <p>Price is required and must be valid</p>}{' '}
                </div>
              </div>
              <div class='row justify-content-between text-left'>
                <div class='form-group col-12 flex-column d-flex'>
                  {' '}
                  <label class='form-control-label px-3'>
                    Description
                    <span class='text-danger'> *</span>
                  </label>{' '}
                  <textarea
                    type='text'
                    autoComplete='off'
                    {...register('description', {
                      required: true,
                    })}
                  />
                  {errors.description && (
                    <p>Description is required and must be valid</p>
                  )}{' '}
                </div>
              </div>
              <div class='row justify-content-end'>
                <div class='form-group col-sm-6'>
                  {' '}
                  <button type='submit' class='btn-block btn-primary'>
                    Save
                  </button>{' '}
                </div>
                <div class='form-group col-sm-6'>
                  <button
                    onClick={() => navigate('/admin')}
                    type='button'
                    class='btn-block btn-warning'
                  >
                    Cancel
                  </button>
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
