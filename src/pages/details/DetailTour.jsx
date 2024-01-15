import React from 'react';
import { useParams } from 'react-router-dom';

const DetailTour = () => {
  const { id } = useParams();
  return <div>{id}</div>;
};

export default DetailTour;
