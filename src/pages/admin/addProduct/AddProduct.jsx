import { doc, setDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { uid } from 'uid';
import TinyEditor from '../../../components/tinyEditor/TinyEditor';
import { AppContext } from '../../../context/AppProvider';
import { db, storage } from '../../../firebase/config';
import { addDocument } from '../../../firebase/services';
import './style.css';

const AddProduct = () => {
  const uuid = uid();
  const editorRef = useRef(null);
  const navigate = useNavigate();
  const { productId } = useParams();

  const { allProductsData } = useContext(AppContext);

  const [imageUpload, setImageUpload] = useState(null);
  const [nameImage, setNameImage] = useState('');

  const isAddMode = !productId;

  const {
    reset,
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleOnChangeUpload = (event) => {
    const fileUpload = event.target.files[0];
    if (!fileUpload) return;
    setNameImage(fileUpload.name + uuid);
    setImageUpload(fileUpload);
  };

  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${nameImage}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {});
    });
  };

  const handleCreateProduct = (data) => {
    let content = '';
    if (editorRef.current) {
      content = editorRef.current.getContent();
    }
    addDocument('products', {
      uuid,
      nameImage,
      content,
      ...data,
    });
    uploadFile();
    navigate('/admin');
  };

  const handleUpdateProduct = (data) => {
    let content = '';
    if (editorRef.current) {
      content = editorRef.current.getContent();
    }
    const newData = {
      ...product,
      ...data,
      content: content.length !== '' ? content : product.content,
      nameImage: nameImage.length > 0 ? nameImage : product.nameImage,
    };
    const docRef = doc(db, 'products', product.id);

    setDoc(docRef, newData)
      .then((docRef) => {
        alert('Entire Document has been updated successfully');
      })
      .catch((error) => {
        console.log(error);
      });
    uploadFile();
    navigate('/admin');
  };

  const onSubmit = (data) => {
    isAddMode ? handleCreateProduct(data) : handleUpdateProduct(data);
  };

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
        'tags',
        'typeProduct',
        'time',
        'description',
        'content',
        'depart',
        'pickup',
        'typeHotel',
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
                  <input type='file' onChange={handleOnChangeUpload} />
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
                    Pickup<span class='text-danger'> *</span>
                  </label>{' '}
                  <input
                    type='text'
                    autoComplete='off'
                    {...register('pickup', {
                      required: true,
                    })}
                  />{' '}
                  {errors.pickup && <p>Pickup is required and must be valid</p>}{' '}
                </div>
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
                <div class='form-group col-sm-6 flex-column d-flex'>
                  {' '}
                  <label class='form-control-label px-3'>Tags</label>{' '}
                  <select autoComplete='off' {...register('tags')}>
                    <option value=''></option>
                    <option value='da-nang'>Đà Nẵng</option>
                    <option value='hue'>Huế</option>
                    <option value='other'>Nơi khác</option>
                  </select>{' '}
                </div>
                <div class='form-group col-sm-6 flex-column d-flex'>
                  {' '}
                  <label class='form-control-label px-3'>
                    Type hotel<span class='text-danger'> *</span>
                  </label>{' '}
                  <input
                    type='text'
                    autoComplete='off'
                    {...register('typeHotel', {
                      required: true,
                    })}
                  />{' '}
                  {errors.typeHotel && (
                    <p>Type hotel is required and must be valid</p>
                  )}{' '}
                </div>
              </div>
              <div class='row justify-content-between text-left'>
                <div class='form-group col-sm-6 flex-column d-flex'>
                  {' '}
                  <label class='form-control-label px-3'>
                    Depart<span class='text-danger'> *</span>
                  </label>{' '}
                  <input
                    type='text'
                    autoComplete='off'
                    {...register('depart', {
                      required: true,
                    })}
                  />{' '}
                  {errors.depart && <p>Depart is required and must be valid</p>}{' '}
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
                      maxLength: 150,
                    })}
                  />
                  {errors.description && errors.name.type === 'required' && (
                    <p>Description is required and must be valid</p>
                  )}
                  {errors.description && errors.name.type === 'maxLength' && (
                    <p>Max length exceeded</p>
                  )}{' '}
                </div>
              </div>
              <div class='row justify-content-between text-left'>
                <div class='form-group col-12 flex-column d-flex'>
                  {' '}
                  <label class='form-control-label px-3'>
                    Content
                    <span class='text-danger'> *</span>
                  </label>{' '}
                  <TinyEditor product={product} editorRef={editorRef} />{' '}
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
