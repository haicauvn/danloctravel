import React, { useContext, useEffect, useState } from 'react';
import Products from '../../components/products/Products';
import { AppContext } from '../../context/AppProvider';

const ToursTravel = () => {
  const { toursData } = useContext(AppContext);
  const [toursDaNang, setToursDaNang] = useState([]);
  const [toursHue, setToursHue] = useState([]);
  const [toursOther, setToursOther] = useState([]);

  useEffect(() => {
    setToursDaNang(toursData.filter((item) => item.tags === 'da-nang'));
    setToursHue(toursData.filter((item) => item.tags === 'hue'));
    setToursOther(toursData.filter((item) => item.tags === 'other'));
  }, [toursData]);

  return (
    <>
      <Products
        data={toursDaNang}
        typeProduct={'Tours'}
        title='Tour du lịch Đà Nẵng'
      />
      <Products
        data={toursHue}
        typeProduct={'Tours'}
        title='Tour du lịch Huế'
      />
      <Products data={toursOther} typeProduct={'Tours'} title='Tour du tự do' />
    </>
  );
};

export default ToursTravel;
