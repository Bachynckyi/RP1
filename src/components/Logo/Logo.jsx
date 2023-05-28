import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.svg';
import scss from './Logo.module.scss';

const Logo = () => {
  return  <NavLink to="/">
    <img className={scss.Logo} src={logo} alt="Farba" />
  </NavLink>;
};

export default Logo;