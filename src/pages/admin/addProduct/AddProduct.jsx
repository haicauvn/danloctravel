import { useForm } from 'react-hook-form';
import { addDocument } from '../../../firebase/services';
import './style.css';

// const InputField = ({ label, name }) => {
//   const {
//     register,
//     formState: { errors },
//   } = useForm();
//   return (
//     <>
//       {' '}
//       <label class='form-control-label px-3'>
//         {label}
//         <span class='text-danger'> *</span>
//       </label>{' '}
//       <input
//         type='text'
//         autoComplete='off'
//         {...register(name, {
//           required: true,
//         })}
//       />
//       {errors.name && <p>{label} product is required and must be valid</p>}{' '}
//     </>
//   );
// };

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    addDocument('product', {
      title: data.title,
      typeProduct: data.typeProduct,
      price: parseFloat(data.price),
      nameImage: data.nameImage,
      time: data.time,
      description: data.description,
    });
  };

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
                    Request a demo
                  </button>{' '}
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
