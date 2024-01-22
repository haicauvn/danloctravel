import { getDownloadURL, ref } from 'firebase/storage';
import { useEffect, useState } from 'react';
import { storage } from '../firebase/config';

const useGetUrlImage = (product) => {
  const [urlImage, setUrlImage] = useState('');

  useEffect(() => {
    const urlImageRef = ref(storage, `images/${product.nameImage}`);
    getDownloadURL(urlImageRef).then((url) => {
      setUrlImage(url);
    });
  }, [product]);
  return urlImage;
};

export default useGetUrlImage;
