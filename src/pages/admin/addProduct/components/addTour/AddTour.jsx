import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import TinyEditor from '../../../../../components/tinyEditor/TinyEditor';

const AddTour = ({
  onSubmit,
  handleOnChangeUpload,
  product,
  editorRef,
  navigate,
  isAddMode,
}) => {
  const {
    reset,
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // get user and set form fields
  useEffect(() => {
    if (!isAddMode) {
      const fields = [
        'title',
        'nameImage',
        'price',
        'tags',
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
    <div>
      <form class='form-card' onSubmit={handleSubmit(onSubmit)} onReset={reset}>
        <div class='row justify-content-between text-start'>
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
        <div class='row justify-content-between text-start'>
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
        <div class='row justify-content-between text-start'>
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
            <label class='form-control-label px-3'>Tags</label>{' '}
            <select autoComplete='off' {...register('tags')}>
              <option value=''></option>
              <option value='da-nang'>Đà Nẵng</option>
              <option value='hue'>Huế</option>
              <option value='other'>Nơi khác</option>
            </select>{' '}
          </div>
        </div>
        <div class='row justify-content-between text-start'>
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
        <div class='row justify-content-between text-start'>
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
                maxLength: 550,
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
        <div class='row justify-content-between text-start'>
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
          <div class='form-group col-sm-6 d-flex justify-content-end'>
            {' '}
            <button type='submit' class='btn-block btn-primary'>
              Save
            </button>{' '}
          </div>
          <div class='form-group col-sm-6 d-flex justify-content-start'>
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
  );
};

export default AddTour;
