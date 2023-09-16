import { NavLink } from 'react-router-dom';
import scss from './ProfilePage.module.scss';
import { userEmail } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

const ProfilePage = () => {
    const userEmailVerify = useSelector(userEmail);
    return (
        <div className={scss.container}>
            {userEmailVerify === "colorfarb@gmail.com" && (
                <div className={scss.menu_buttons}>
                <NavLink to="/addcategory" className={scss.button}>Додати категорію</NavLink>
                <NavLink to="/addsubcategory" className={scss.button}>Додати підкатегорію</NavLink>
                <NavLink to="/addproduct" className={scss.button}>Додати товар</NavLink>
                <NavLink to="/updatecategory" className={scss.button}>Змінити категорію</NavLink>
                <NavLink to="/updatesubcategory" className={scss.button}>Змінити підкатегорію</NavLink>
                <NavLink to="/updateproduct" className={scss.button}>Змінити товар</NavLink>
                <NavLink to="/slider" className={scss.button}>Змінити слайдер</NavLink>
                </div>
            )}
        </div>
    );
  };
  
export default ProfilePage;