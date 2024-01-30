import { doc, setDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { uid } from 'uid';
import { AppContext } from '../../../context/AppProvider';
import { db, storage } from '../../../firebase/config';
import { addDocument } from '../../../firebase/services';
import AddTour from './components/addTour/AddTour';
import './style.css';
import AddCar from './components/addCar/AddCar';
import AddHotel from './components/addHotel/AddHotel';

const AddProduct = () => {
  const uuid = uid();
  const editorRef = useRef(null);
  const navigate = useNavigate();
  const { productId } = useParams();

  const { allProductsData } = useContext(AppContext);

  const [nameImage, setNameImage] = useState('');
  const [imageUpload, setImageUpload] = useState(null);
  const [selectedOption, setSelectedOption] = useState('tour-travel');

  const isAddMode = !productId;

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
      typeProduct: selectedOption,
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
      typeProduct: selectedOption,
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

  const props = {
    onSubmit,
    handleOnChangeUpload,
    product,
    editorRef,
    navigate,
    isAddMode,
  };

  useEffect(() => {
    setSelectedOption(
      product.typeProduct ? product.typeProduct : 'tour-travel'
    );
  }, [product, setSelectedOption]);

  return (
    <div class='container-fluid px-1 py-5 mx-auto add-product'>
      <div class='row d-flex justify-content-center'>
        <div class='col-xl-7 col-lg-8 col-md-9 col-11 text-center'>
          {isAddMode && (
            <div class='form-group col-sm-6 flex-column d-flex'>
              {' '}
              <label class='form-control-label px-3 text-start'>
                Type product<span class='text-danger'> *</span>
              </label>{' '}
              <select
                autoComplete='off'
                onChange={(e) => setSelectedOption(e.target.value)}
                defaultValue={product.typeProduct}
              >
                <option value='tour-travel'>Tour du lịch</option>
                <option value='rent-car'>Thuê xe du lịch</option>
                <option value='hotel'>Khách sạn</option>
              </select>
            </div>
          )}

          <div class='card'>
            <h3 class='text-center mb-5'>
              {isAddMode ? 'Create product' : 'Update product'}
            </h3>
            {selectedOption === 'tour-travel' && (
              <AddTour travelForm {...props} />
            )}
            {selectedOption === 'rent-car' && <AddCar carForm {...props} />}
            {selectedOption === 'hotel' && <AddHotel hotelForm {...props} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
