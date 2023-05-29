import { NavLink } from 'react-router-dom';
import scss from './AuthNav.module.scss';


const AuthNav = () => {
  return (
    <div>
        <NavLink className={scss.button} to="/login">
          Вхід
        </NavLink>
        <NavLink className={scss.button} to="/register">
          Реєстрація
        </NavLink>
    </div>
  );
};

export default AuthNav;