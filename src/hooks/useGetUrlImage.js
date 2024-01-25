import { getDownloadURL, ref } from 'firebase/storage';
import { useEffect, useState } from 'react';
import { storage } from '../firebase/config';

const useGetUrlImage = (product) => {
  const [urlImage, setUrlImage] = useState('');

  const defaultImageUrl =
    'https://cdn.pixabay.com/photo/2021/08/18/07/16/love-bridge-6554833_1280.jpg';

  useEffect(() => {
    const urlImageRef = ref(storage, `images/${product.nameImage}`);

    getDownloadURL(urlImageRef)
      .then((url) => {
        setUrlImage(url);
      })
      .catch((error) => {
        // Handle potential errors gracefully:
        console.error('Error fetching image URL:', error);

        // Consider appropriate actions based on error type:
        if (error.code === 'storage/object-not-found') {
          // Handle missing image:
          setUrlImage(defaultImageUrl); // Use a placeholder image
        } else {
          // Handle other errors:
          setUrlImage(null); // Or display an error message
        }

        // Optionally, log detailed error information for debugging:
        console.error(error.stack);
      });
  }, [product]);
  return urlImage;
};

export default useGetUrlImage;
