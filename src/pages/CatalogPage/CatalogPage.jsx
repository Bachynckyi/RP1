import { NavLink } from 'react-router-dom';
import scss from './CatalogPage.module.scss';
import Footer from "components/Footer/Footer";

const CatalogPage = () => {
    return (
      <>
        <div className={scss.container}>
          <h1>Каталог товарів</h1>
          <NavLink to="/emali">Емаль</NavLink>
          <NavLink to="/gruntovki">Грунт</NavLink>
          <NavLink to="/emali-gruntovki-3v1">Емаль&Грунт 3в1</NavLink>
        </div>
        <Footer/>
      </>
    );
  };
  
  export default CatalogPage;