import { NavLink } from 'react-router-dom';
import scss from './AuthNav.module.scss';
import { isLogin } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import {SlBasket} from "react-icons/sl";
import {BiUser} from "react-icons/bi"

const AuthNav = () => {
  const userStatus = useSelector(isLogin);
  return (
    <div>
        {!userStatus ? (
          <div className={scss.usermenu_container}>
            <NavLink to="/order" className={scss.basket_link}>
              <SlBasket className={scss.basket_icon}/>
            </NavLink>
            <NavLink className={scss.user_link} to="/login">
              <BiUser className={scss.user_icon}/>
            </NavLink>
          </div>
        ) : (
          <div className={scss.usermenu_container}>
            <NavLink to="/order" className={scss.basket_link}>
              <SlBasket className={scss.basket_icon}/>
            </NavLink>
            <NavLink to="/profile" className={scss.user} >
              <BiUser className={scss.user_icon}/>
            </NavLink>
          </div>  
        )}
    </div>
  );
};

export default AuthNav;