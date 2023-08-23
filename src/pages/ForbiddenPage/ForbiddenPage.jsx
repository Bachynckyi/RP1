import React from 'react';
import scss from "./ForbiddenPage.module.scss";
import Footer from 'components/Footer/Footer';

export default function ForbiddenPage () {
  return (
    <>
      <div className={scss.container}>
        <h1 className={scss.error_code}>403</h1>
        <h2 className={scss.error_type}>Forbidden</h2>
        <h3 className={scss.error_message}>You don't have permission to access this resourse</h3>
      </div>
      <Footer/>
    </>
  );
};