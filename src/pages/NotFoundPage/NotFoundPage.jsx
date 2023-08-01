import React from 'react';
import image from '../../images/404.png';
import scss from "./NotFoundPage.module.scss"
import Footer from 'components/Footer/Footer';

export default function PageNotFound() {
  return (
    <>
      <div className={scss.container}>
        <img className={scss.image} src={image} alt="Page not found.Error 404." />
      </div>
      <Footer/>
    </>
  );
};