import { NavLink } from 'react-router-dom';
import scss from './AuthNav.module.scss';
import { isLogin } from 'redux/auth/auth-selectors';
import {SlBasket} from "react-icons/sl";
import {BiUser} from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import { userEmail } from 'redux/auth/auth-selectors';
import {IoLogOutOutline} from "react-icons/io5";
import { useSelector, useDispatch } from 'react-redux';
import { userToken } from 'redux/auth/auth-selectors';
import { logOut } from '../../redux/auth/auth-operations';

const AuthNav = () => {
  const userStatus = useSelector(isLogin);
  const navigate = useNavigate();
  const userEmailVerify = useSelector(userEmail);
  const dispatch = useDispatch();
  const token = useSelector(userToken)

  const onClick = () => {
    if(userEmailVerify === "colorfarb@gmail.com") {
      navigate(`/profile`);
    }
    else {
      return
    }
  };

  const logOutUser = () => {

    const sendData = async (token) => {
        try {
          dispatch(logOut(token))
            .then(navigate(`/`));
        } 
        catch (error) {
          console.log(error);
        }
      };
    sendData(token);
  };

  return (
    <div>
        {!userStatus ? (
          <div className={scss.usermenu_container}>
            <NavLink to="/order" className={scss.basket_link}>
              <SlBasket className={scss.basket_icon}/>
            </NavLink>
            <NavLink className={scss.user} to="/login">
              <BiUser className={scss.user_icon}/>
            </NavLink>
          </div>
        ) : (
          <div className={scss.usermenu_container}>
            <NavLink to="/order" className={scss.basket_link}>
              <SlBasket className={scss.basket_icon}/>
            </NavLink>
            <button className={scss.user} onClick={onClick}>
              <BiUser className={scss.user_icon}/>
            </button>
            <button className={scss.user} onClick={logOutUser}>
              <IoLogOutOutline className={scss.logout_icon}/>
            </button>
          </div>  
        )}
    </div>
  );
};

export default AuthNav;