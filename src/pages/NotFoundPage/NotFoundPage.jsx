import React from 'react';
import scss from "./NotFoundPage.module.scss"
import Footer from 'components/Footer/Footer';

export default function PageNotFound() {
  return (
    <>
      <div className={scss.container}>
        <h1 className={scss.error_code}>404</h1>
        <h2 className={scss.error_type}>Not Found</h2>
        <h3 className={scss.error_message}>The resource requested could not be found on this server!</h3>
      </div>
      <Footer/>
    </>
  );
};