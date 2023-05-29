import { NavLink } from 'react-router-dom';
import scss from './Logo.module.scss';

const Logo = () => {
  return  <NavLink to="/" className={scss.nav_logo}>
    <span className={scss.logo}>COLOR FARB</span>
  </NavLink>;
};

export default Logo;