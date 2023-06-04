import { NavLink } from 'react-router-dom';
import scss from './AuthNav.module.scss';
import { isLogin } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import ButtonLogOut from 'components/ButtonLogOut/ButtonLogOut';


const AuthNav = () => {
  const userStatus = useSelector(isLogin);
  return (
    <div>
        {!userStatus ? (
          <>
          <NavLink className={scss.button} to="/login">
            Вхід
          </NavLink>
          <NavLink className={scss.button} to="/register">
            Реєстрація
          </NavLink>
          </>
        ) : (
          <>
          <NavLink className={scss.button} to="/">
            
          </NavLink>
          <ButtonLogOut/>
          </>  
        )}
    </div>
  );
};

export default AuthNav;