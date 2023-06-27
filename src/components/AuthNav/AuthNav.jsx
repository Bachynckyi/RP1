import { NavLink } from 'react-router-dom';
import scss from './AuthNav.module.scss';
import { isLogin } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import userIcon from '../../images/iconUser.svg';

const AuthNav = () => {
  const userStatus = useSelector(isLogin);
  // const name = useSelector(userName);
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
          <NavLink to="/profile" className={scss.user} >
          {/* {name ?   
          (<p className={scss.name}>{name}</p>)
          : 
          (<p className={scss.name}>User</p>)
          }   */}
          <img className={scss.icon} src={userIcon} alt="userIcon" /> 
          </NavLink>
          </>  
        )}
    </div>
  );
};

export default AuthNav;