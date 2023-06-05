import { NavLink } from 'react-router-dom';
import scss from './CatalogPage.module.scss';
import Footer from "components/Footer/Footer";
import imageDefault from "../../images/photo_default.jpg";

const CatalogPage = () => {
    return (
      <>
        <div className={scss.container}>
          <h1 className={scss.title}>Каталог товарів</h1>
          <div className={scss.catalog_list}>
            <NavLink to="/emali" className={scss.catalog_link}>
              <img className={scss.image_link} src={imageDefault} alt="default"/>
              <p className={scss.image_title}>Емаль</p>
            </NavLink>
            <NavLink to="/gruntovki" className={scss.catalog_link}>
            <img className={scss.image_link} src={imageDefault} alt="default"/>
              <p className={scss.image_title}>Грунт</p>
            </NavLink>
            <NavLink to="/emali-gruntovki-3v1" className={scss.catalog_link}>
            <img className={scss.image_link} src={imageDefault} alt="default"/>
              <p className={scss.image_title}>Грунт&Емаль 3в1</p>
            </NavLink>
          </div>
        </div>
        <Footer/>
      </>
    );
  };
  
  export default CatalogPage;