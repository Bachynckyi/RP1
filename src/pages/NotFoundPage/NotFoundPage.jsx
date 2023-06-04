import React from 'react';
import image from '../../images/404.png';

export default function PageNotFound() {
  return (
    <div >
      <img src={image} alt="Page not found.Error 404." />
    </div>
  );
};